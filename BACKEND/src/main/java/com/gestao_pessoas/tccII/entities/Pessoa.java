package com.gestao_pessoas.tccII.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.gestao_pessoas.tccII.dto.PessoaDTO;
import com.gestao_pessoas.tccII.enums.Sexo;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tb_pessoas")
@Inheritance(strategy = InheritanceType.JOINED)
public class Pessoa implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	
	@NotNull(message = "O nome não pode ser nulo.")
	@Size(min = 2, max = 50, message = "O nome deve ter entre 2 e 50 caracteres.")
	private String nome;
	
	@NotNull(message = "A data de nascimento não pode ser nula.")
	private LocalDate nascimento;
	
	@NotNull(message = "O CPF não pode ser nulo.")
	@Size(min = 11, max = 11)
	@Pattern(regexp = "^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$|^\\d{11}$", 
			message = "O CPF deve estar no formato 000.000.000-00 ou conter apenas 11 números")
	private String cpf;
	
	@NotNull(message = "O RG não pode ser nulo.")
	@NotEmpty
	@Size(max = 9)
	@Pattern(regexp = "^[0-9]{1,9}([.-][0-9]{1,3})?$", 
			message = "O RG deve ter até 9 dígitos, podendo conter pontos ou hífen")
	private String rg;
	
	@NotNull(message = "O sexo não pode ser nulo.")
	@Enumerated(EnumType.STRING)
	private Sexo sexo;
	
	@ManyToOne
	@JoinColumn(name = "empresa_id")
	@JsonBackReference
	private Empresa empresa;
	
	//CONSTRUCTOR
	public Pessoa(Long id, String nome, LocalDate nascimento, String cpf, String rg, Sexo sexo, Empresa empresa) {
		this.id = id;
		this.nome = nome;
		this.nascimento = nascimento;
		this.cpf = cpf;
		this.rg = rg;
		this.sexo = sexo;
		this.empresa = empresa;
	}
	public Pessoa(PessoaDTO pessoaDTO) {
		BeanUtils.copyProperties(pessoaDTO, this);
	}
	public Pessoa() {}
	
	//GETTERS e SETTERS
	public Long getId() {
		return id;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public LocalDate getNascimento() {
		return nascimento;
	}
	public void setNascimento(LocalDate nascimento) {
		this.nascimento = nascimento;
	}
	
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public String getRg() {
		return rg;
	}
	public void setRg(String rg) {
		this.rg = rg;
	}
	
	public Sexo getSexo() {
		return sexo;
	}
	public void setSexo(Sexo sexo) {
		this.sexo = sexo;
	}
	
	public Empresa getEmpresa() {
		return empresa;
	}

	@Override
	public int hashCode() {
		return Objects.hash(cpf, id, nome);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pessoa other = (Pessoa) obj;
		return Objects.equals(cpf, other.cpf) && id == other.id && Objects.equals(nome, other.nome);
	}

}
