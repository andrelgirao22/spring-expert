package com.alg.brewer.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.alg.brewer.services.CadastroCervejaService;

@Configuration
@ComponentScan(basePackageClasses=CadastroCervejaService.class)
public class ServiceConfig {

}
