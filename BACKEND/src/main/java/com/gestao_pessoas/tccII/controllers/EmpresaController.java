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

import com.gestao_pessoas.tccII.dto.EmpresaDTO;
import com.gestao_pessoas.tccII.entities.Empresa;
import com.gestao_pessoas.tccII.services.EmpresaService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/api/empresa")
public class EmpresaController {

	@Autowired
	private EmpresaService service;
	
	@Operation(description = "Busca todas as empresas.")
	@GetMapping
	public ResponseEntity<List<EmpresaDTO>> findAll(){
		List<EmpresaDTO> listDTO = service.findAll();
		return ResponseEntity.ok().body(listDTO);
	}
	
	@Operation(description = "Busca a empresa pelo id.")
	@GetMapping(value = "/{id}")
	public ResponseEntity<EmpresaDTO> findById(@PathVariable Long id){
		EmpresaDTO empresaDTO = service.findById(id);
		return ResponseEntity.ok().body(empresaDTO);
	}
	
	@Operation(description = "Insere uma nova empresa.")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<EmpresaDTO> insert(@Valid @RequestBody EmpresaDTO empresaDTO){
		Empresa empresa = service.insert(empresaDTO);
		EmpresaDTO createdEmpresaDTO = service.convertToDTO(empresa);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEmpresaDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(createdEmpresaDTO);
	}
	
	@Operation(description = "Deleta a empresa pelo id.")
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@Operation(description = "Atualiza a empresa pelo id.")
	@PutMapping(value = "/{id}")
	public ResponseEntity<Empresa> update(@PathVariable Long id, @RequestBody Empresa obj){
		obj = service.update(id, obj);
		return ResponseEntity.ok().body(obj);
	}
}
