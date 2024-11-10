package com.gestao_pessoas.tccII.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.gestao_pessoas.tccII.dto.EmpresaDTO;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tb_empresa")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Empresa implements Serializable{	

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "O nome não pode ser nulo.")
	@Size(min = 2, max = 30, message = "O nome deve ter entre 2 e 30 caracteres.")
	private String nome;
	
	@NotNull(message = "O CNPJ não pode ser nulo.")
	@Size(min = 14, max = 14, message = "O CNPJ deve conter 14 números")
	private String cnpj;
	
	@NotNull(message = "A data inicial não pode ser nula.")
	private LocalDate dataInicial;
	
	@OneToMany(mappedBy = "empresa", cascade = CascadeType.ALL)
	private List<Setor> setores;
	
	@OneToMany(mappedBy = "empresa")
	@JsonIgnore
	private List<Cargo> cargos;
	
	@OneToMany(mappedBy = "empresa")
	@JsonIgnore
	private List<Colaborador> colaboradores;
	
	//CONSTRUCTORS
	public Empresa(String nome, String cnpj) {
		this.nome = nome;
		this.cnpj = cnpj;
		this.dataInicial = LocalDate.now();
	}
	public Empresa(EmpresaDTO empresaDTO) {
		BeanUtils.copyProperties(empresaDTO, this);
	}
	public Empresa() {}
	
	//GETTERS e SETTERS
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
			
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
		
	public LocalDate getDataInicial() {
		return dataInicial;
	}
	public void setDataInicial(LocalDate dataInicial) {
		this.dataInicial = dataInicial;
	}
	
	public List<Setor> getSetores() {
		return setores;
	}
	public void setSetores(List<Setor> setores) {
		this.setores = setores;
	}
	
	public List<Cargo> getCargos() {
		return cargos;
	}
	public void setCargos(List<Cargo> cargos) {
		this.cargos = cargos;
	}
	
	public List<Colaborador> getColaboradores() {
		return colaboradores;
	}
	public void setColaboradores(List<Colaborador> colaboradores) {
		this.colaboradores = colaboradores;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, nome);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Empresa other = (Empresa) obj;
		return id == other.id && Objects.equals(nome, other.nome);
	}

}
