package com.gestao_pessoas.tccII.entities;

import java.time.LocalDate;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gestao_pessoas.tccII.enums.Sexo;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tb_usuario")
public class Usuario extends Pessoa{
	
	private static final long serialVersionUID = 1L;
	
	@NotNull(message = "O usuário não pode ser nulo.")
	@Size(min = 2, max = 20, message = "O usuário deve ter entre 2 e 20 caracteres.")
	@Column(unique = true)
	private String usuario;
	
	@NotNull(message = "A senha não pode ser nula.")
	@Size(min = 6)
	@JsonIgnore
	private String senha;
	
	@NotNull(message = "A data inicial não pode ser nula.")
	private LocalDate dataInicial;
	private LocalDate dataFinal;
	
	//CONSTRUCTORS
	public Usuario(Long id, String nome, LocalDate nascimento, String cpf, String rg, Sexo sexo, Empresa empresa, String usuario, String senha, LocalDate dataInicial) {
		super(id, nome, nascimento, cpf, rg, sexo, empresa);
		this.usuario = usuario;
		this.senha = senha;
		this.dataInicial = dataInicial;
	}

	//GETTERS e SETTERS
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
	protected String getSenha() {
		return senha;
	}
	protected void setSenha(String senha) {
		this.senha = senha;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + Objects.hash(usuario);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		return Objects.equals(usuario, other.usuario);
	}
}
