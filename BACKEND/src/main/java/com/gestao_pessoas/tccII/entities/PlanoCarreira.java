package com.gestao_pessoas.tccII.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.gestao_pessoas.tccII.dto.PlanoCarreiraDTO;
import com.gestao_pessoas.tccII.enums.NivelPlanoCarreira;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tb_plano_carreira")
public class PlanoCarreira implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "O nome não pode ser nulo.")
	@Size(min = 2, max = 40, message = "O nome deve ter entre 2 e 40 caracteres.")
	private String nome;
	
	@Enumerated(EnumType.STRING)
	private NivelPlanoCarreira nivel;
	
	@NotNull(message = "A remuneração não pode ser nula.")
	private double remuneracao;
	
	@NotNull(message = "A data inicial não pode ser nula.")
	private LocalDate dataInicial;
	private LocalDate dataFinal;	
	
	@OneToMany(mappedBy = "nivelProfissional")
	@JsonBackReference
	private List<Cargo> cargos;
	
	//CONSTRUCTOR
	public PlanoCarreira(String nome, NivelPlanoCarreira nivel, double remuneracao) {
		this.nome = nome;
		this.nivel = nivel;
		this.remuneracao = remuneracao;
		this.dataInicial = LocalDate.now();
	}
	public PlanoCarreira(PlanoCarreiraDTO planoCarreiraDTO) {
		BeanUtils.copyProperties(planoCarreiraDTO, this);
	}
	public PlanoCarreira() {
	}
	
	
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

	public NivelPlanoCarreira getNivel() {
		return nivel;
	}
	public void setNivel(NivelPlanoCarreira nivel) {
		this.nivel = nivel;
	}

	public double getRemuneracao() {
		return remuneracao;
	}
	public void setRemuneracao(double remuneracao) {
		this.remuneracao = remuneracao;
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
	
	// Método para alteração salarial baseado em porcentagem
	public void alteracaoSalarial(double remuneracao, double pctAumento) {
		double aumento = remuneracao * pctAumento / 100;
		double salarioAtual = this.remuneracao;
		this.remuneracao = aumento + salarioAtual;
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
		PlanoCarreira other = (PlanoCarreira) obj;
		return id == other.id && Objects.equals(nome, other.nome);
	}
	
}
