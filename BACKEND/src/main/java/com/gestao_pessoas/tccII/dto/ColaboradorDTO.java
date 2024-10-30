package com.gestao_pessoas.tccII.dto;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;

import com.gestao_pessoas.tccII.entities.Cargo;
import com.gestao_pessoas.tccII.entities.Colaborador;
import com.gestao_pessoas.tccII.entities.Empresa;
import com.gestao_pessoas.tccII.entities.Setor;
import com.gestao_pessoas.tccII.enums.Sexo;
import com.gestao_pessoas.tccII.enums.SituacaoColaborador;

public class ColaboradorDTO{
	
	private Long id;
	private String nome;
	private LocalDate nascimento;
	private String cpf;
	private String rg;
	private Sexo sexo;
	private Empresa empresa;
	private LocalDate dataAdmissao;
	private LocalDate dataFinal;
	private SituacaoColaborador situacaoColaborador;
	private Setor setor;
	private Cargo cargo;
	private double remuneracao;
	private int diasAfastado;
	private int diasFerias;
	
	public ColaboradorDTO(Colaborador colaborador) {
		BeanUtils.copyProperties(colaborador, this);
	}
	public ColaboradorDTO() {
		
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
	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	public Long getId() {
		return id;
	}
	public LocalDate getDataAdmissao() {
		return dataAdmissao;
	}
	public void setDataAdmissao(LocalDate dataAdmissao) {
		this.dataAdmissao = dataAdmissao;
	}
	public LocalDate getDataFinal() {
		return dataFinal;
	}
	public void setDataFinal(LocalDate dataFinal) {
		this.dataFinal = dataFinal;
	}
	public SituacaoColaborador getSituacaoColaborador() {
		return situacaoColaborador;
	}
	public void setSituacaoColaborador(SituacaoColaborador situacaoColaborador) {
		this.situacaoColaborador = situacaoColaborador;
	}
	public Setor getSetor() {
		return setor;
	}
	public void setSetor(Setor setor) {
		this.setor = setor;
	}
	public Cargo getCargo() {
		return cargo;
	}
	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}
	public double getRemuneracao() {
		return remuneracao;
	}
	public void setRemuneracao(double remuneracao) {
		this.remuneracao = remuneracao;
	}
	public int getDiasAfastado() {
		return diasAfastado;
	}
	public void setDiasAfastado(int diasAfastado) {
		this.diasAfastado = diasAfastado;
	}
	public int getDiasFerias() {
		return diasFerias;
	}
	public void setDiasFerias(int diasFerias) {
		this.diasFerias = diasFerias;
	}
}
