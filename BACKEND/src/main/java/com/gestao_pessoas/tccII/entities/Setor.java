package com.gestao_pessoas.tccII.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.gestao_pessoas.tccII.dto.SetorDTO;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tb_setor")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Setor implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "O nome não pode ser nulo.")
	@Size(min = 2, max = 40, message = "O nome deve ter entre 2 e 40 caracteres.")
	private String nome;
	
	@NotNull(message = "A descrição não pode ser nula.")
	@Size(min = 1, max = 500, message = "O nome deve ter entre 2 e 40 caracteres.")
	private String descricao;
	
	@NotNull(message = "A data inicial não pode ser nula.")
	private LocalDate dataInicial;
	private LocalDate dataFinal;
	
	@OneToMany(mappedBy = "setor", cascade = CascadeType.ALL,  orphanRemoval = true)
	private List<Cargo> cargos = new ArrayList<>();
	
	@OneToMany(mappedBy = "setor", cascade = CascadeType.ALL,  orphanRemoval = true)
	@JsonIgnore
	private List<Colaborador> colaboradores = new ArrayList<>();
	
	@ManyToOne
	@JoinColumn(name = "empresa_id")
	@JsonBackReference
	private Empresa empresa;
	
	//CONSTRUCTORS
	public Setor(String nome, String descricao, Empresa empresa) {
		this.nome = nome;
		this.descricao = descricao;
		this.dataInicial = LocalDate.now();
		this.empresa = empresa;
	}
	public Setor(String nome, String descricao, Empresa empresa, List<Cargo> cargos) {
		this.nome = nome;
		this.descricao = descricao;
		this.dataInicial = LocalDate.now();
		this.cargos = cargos;
		this.empresa = empresa;
	}
	public Setor(String nome, String descricao, Empresa empresa, List<Cargo> cargos, List<Colaborador> colaboradores) {
		this.nome = nome;
		this.descricao = descricao;
		this.dataInicial = LocalDate.now();
		this.cargos = cargos;
		this.colaboradores = colaboradores;
		this.empresa = empresa;
	}
	public Setor(SetorDTO setorDTO) {
		BeanUtils.copyProperties(setorDTO, this);
	}
	public Setor() {}
	
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
		
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public LocalDate getDataInicial() {
		return dataInicial;
	}
	public void setDataInicial(LocalDate dataInicial) {
		this.dataInicial = dataInicial;
	}
	
	public LocalDate getDataFinal() {
		return dataFinal;
	}
	public void setDataFinal(LocalDate dataFinal) {
		this.dataFinal = dataFinal;
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
	
	public Empresa getEmpresa() {
		return empresa;
	}
	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
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
		Setor other = (Setor) obj;
		return id == other.id && Objects.equals(nome, other.nome);
	}
	
}
