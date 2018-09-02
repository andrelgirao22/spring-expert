package com.alg.brewer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alg.brewer.model.Estilo;

@Repository
public interface Estilos extends JpaRepository<Estilo, Long> {

	Optional<Estilo> findByNomeIgnoreCase(String nome);
	
}
