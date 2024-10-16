package com.gestao_pessoas.tccII.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.gestao_pessoas.tccII.dto.ColaboradorDTO;
import com.gestao_pessoas.tccII.entities.Colaborador;
import com.gestao_pessoas.tccII.services.ColaboradorService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/api/colaboradores")
public class ColaboradorController {

	@Autowired
	private ColaboradorService service;
	
	@Operation(description = "Busca todos os colaboradores.")
	@GetMapping
	public ResponseEntity<List<ColaboradorDTO>> findAll(){
		List<ColaboradorDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@Operation(description = "Busca o colaborador pelo id.")
	@GetMapping(value = "/{id}")
	public ResponseEntity<ColaboradorDTO> findById(@PathVariable Long id){
		ColaboradorDTO colaboradorDTO = service.findById(id);
		return ResponseEntity.ok().body(colaboradorDTO);
	}
	
	@Operation(description = "Insere um novo colaborador.")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ColaboradorDTO> insert(@Valid @RequestBody ColaboradorDTO colaboradorDTO){
		Colaborador colaborador = service.insert(colaboradorDTO);
		ColaboradorDTO createdColaboradorDTO = service.convertToDTO(colaborador);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdColaboradorDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(createdColaboradorDTO);
	}
	
	@Operation(description = "Deleta o colaborador pelo id.")
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@Operation(description = "Atualiza o colaborador pelo id.")
	@PutMapping(value = "/{id}")
	public ResponseEntity<Colaborador> update(@PathVariable Long id, @RequestBody Colaborador obj){
		obj = service.update(id, obj);
		return ResponseEntity.ok().body(obj);
	}
}
