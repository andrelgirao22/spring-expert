package com.alg.brewer.thymeleaf.processador;

import org.thymeleaf.context.ITemplateContext;
import org.thymeleaf.engine.AttributeName;
import org.thymeleaf.model.IProcessableElementTag;
import org.thymeleaf.processor.element.AbstractAttributeTagProcessor;
import org.thymeleaf.processor.element.IElementTagStructureHandler;
import org.thymeleaf.spring4.util.FieldUtils;
import org.thymeleaf.templatemode.TemplateMode;

public class ClassForErrorAttributeTagProcessor extends AbstractAttributeTagProcessor {

	private static final String NOME_ATRIBUTO = "classforerror";
	private static final int PRECEDENCIA = 1000;
	
	public ClassForErrorAttributeTagProcessor(String dialectPrefix) {
		super(TemplateMode.HTML, dialectPrefix, null, false, NOME_ATRIBUTO, true , PRECEDENCIA,true);
	}

	@Override
	protected void doProcess(ITemplateContext context, IProcessableElementTag tag, AttributeName arg2, String attributeValue,
			IElementTagStructureHandler structureHandler) {
		
		boolean temError = FieldUtils.hasErrors(context, attributeValue);
		if(temError) {
			String classeExistentes = tag.getAttributeValue("class");
			structureHandler.setAttribute("class", classeExistentes + " has-error");
		}
	}

}
