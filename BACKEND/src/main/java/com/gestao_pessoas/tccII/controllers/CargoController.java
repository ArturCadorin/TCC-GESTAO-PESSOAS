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

import com.gestao_pessoas.tccII.dto.CargoDTO;
import com.gestao_pessoas.tccII.entities.Cargo;
import com.gestao_pessoas.tccII.services.CargoService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/api/cargos")
public class CargoController {

	@Autowired
	private CargoService service;
	
	@Operation(description = "Busca todos os cargos.")
	@GetMapping
	public ResponseEntity<List<CargoDTO>> findAll(){
		List<CargoDTO> listDTO = service.findAll();
		return ResponseEntity.ok().body(listDTO);
	}
	
	@Operation(description = "Busca o cargo pelo id.")
	@GetMapping(value = "/{id}")
	public ResponseEntity<CargoDTO> findById(@PathVariable Long id){
		CargoDTO cargoDTO = service.findById(id);
		return ResponseEntity.ok().body(cargoDTO);
	}
	
	@Operation(description = "Insere um novo cargo.")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<CargoDTO> insert(@Valid @RequestBody CargoDTO cargoDTO){
		Cargo cargo = service.insert(cargoDTO);
		CargoDTO createdCargoDTO = service.convertToDTO(cargo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCargoDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(createdCargoDTO);
	}
	
	@Operation(description = "Deleta o cargo pelo id.")
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@Operation(description = "Atualiza o cargo pelo id.")
	@PutMapping(value = "/{id}")
	public ResponseEntity<Cargo> update(@PathVariable Long id, @RequestBody Cargo obj){
		obj = service.update(id, obj);
		return ResponseEntity.ok().body(obj);
	}
}
