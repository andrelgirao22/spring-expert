package com.alg.brewer.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.alg.brewer.model.Cerveja;

@Controller
public class CervejasController {

	private static final Logger logger = LoggerFactory.getLogger(CervejasController.class);
	
	@RequestMapping("/cervejas/novo")
	public String novo(Cerveja cerveja) {
		
		if(logger.isDebugEnabled()) {			
			logger.error("aqui é um logger de erro");
			logger.info("aqui é um logger de info");
		}
		
		return "cerveja/CadastroCerveja";
	}
	
	@RequestMapping(value = "/cervejas/novo", method = RequestMethod.POST)
	public String cadastrar(@Valid Cerveja cerveja, BindingResult result, Model model, RedirectAttributes redirectAttributes) {
		if(result.hasErrors()) {
			return novo(cerveja);
		}
		
		redirectAttributes.addFlashAttribute("mensagem","Cerveja salva com sucesso " + cerveja);
		return "redirect:/cervejas/novo";
	}
}
