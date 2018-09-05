package com.alg.brewer.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.alg.brewer.model.Estilo;
import com.alg.brewer.services.CadastroEstiloService;
import com.alg.brewer.services.exception.NomeEstiloCadastradoException;

@Controller
@RequestMapping("/estilos")
public class EstilosController {

	@Autowired
	private CadastroEstiloService service;
	
	@RequestMapping("/novo")
	public ModelAndView novo(Estilo estilo) {
		ModelAndView mv = new ModelAndView("estilo/CadastroEstilo");
		return mv;
	}
	
	@RequestMapping(value = "/novo", method = RequestMethod.POST)
	public ModelAndView cadastrar(@Valid Estilo estilo, BindingResult result, Model model, RedirectAttributes redirectAttributes) {
		
		if(result.hasErrors()) {
			return novo(estilo);
		}
		
		try {			
			this.service.salvar(estilo);
		} catch(NomeEstiloCadastradoException exception) {
			result.rejectValue("nome",exception.getMessage(), exception.getMessage());
			return novo(estilo);
		}
		redirectAttributes.addFlashAttribute("mensagem","Estilo salvo com sucesso ");
		return new ModelAndView("redirect:/estilos/novo");
	}
	
	@RequestMapping(method= RequestMethod.POST, consumes= { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody ResponseEntity<?> salvar(@RequestBody @Valid Estilo estilo, BindingResult result) {
		if(result.hasErrors()) {
			return ResponseEntity.badRequest().body(result.getFieldError("nome").getDefaultMessage());
		}
		
		estilo = service.salvar(estilo);
		//NomeEstiloCadastradoException e) {
		
		return ResponseEntity.ok(estilo);
	}
	
}
