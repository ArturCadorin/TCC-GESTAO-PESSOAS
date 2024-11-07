package com.gestao_pessoas.tccII.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.gestao_pessoas.tccII.dto.ColaboradorDTO;
import com.gestao_pessoas.tccII.enums.Sexo;
import com.gestao_pessoas.tccII.enums.SituacaoColaborador;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tb_colaborador")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Colaborador implements Serializable{

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
	private String cpf;
	
	@NotNull(message = "O RG não pode ser nulo.")
	@Size(max = 9)
	private String rg;
	
	@NotNull(message = "O sexo não pode ser nulo.")
	@Enumerated(EnumType.STRING)
	private Sexo sexo;
	
	@NotNull(message = "A data de admissão não pode ser nula.")
	private LocalDate dataAdmissao;
	private LocalDate dataFinal;
	
	@Enumerated(EnumType.STRING)
	private SituacaoColaborador situacaoColaborador;
	
	@ManyToOne
	@JoinColumn(name = "setor_id")
	private Setor setor;
	
	@ManyToOne
	@JoinColumn(name = "cargo_id")
	private Cargo cargo;
	
	@ManyToOne
	@JoinColumn(name = "empresa_id")
	@JsonBackReference
	private Empresa empresa;
	
	private double remuneracao;
	
	private int diasAfastado;
	private int diasFerias;
	
	//CONSTRUCTOR
	public Colaborador(String nome, LocalDate nascimento, String cpf, String rg, Sexo sexo, Empresa empresa, Setor setor, Cargo cargo) {
		this.nome = nome;
		this.nascimento = nascimento;
		this.cpf = cpf;
		this.rg = rg;
		this.sexo = sexo;
		this.empresa = empresa;
		this.dataAdmissao = LocalDate.now();
		this.setor = setor;
		this.cargo = cargo;
		this.situacaoColaborador = SituacaoColaborador.TRABALHANDO;
		this.remuneracao = this.cargo.getNivelProfissional().getRemuneracao();
	}
	public Colaborador(ColaboradorDTO colaboradorDTO) {
		BeanUtils.copyProperties(colaboradorDTO, this);
	}
	public Colaborador() {
		super();
	}
	
	//GETTERS e SETTERS
	
	public LocalDate getDataAdmissao() {
		return dataAdmissao;
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
	
	// Gera um afastamento para o colaborador.
	// Deve receber por paramêtro a quantidade de dias de afastamento
	public void gerarAfastamento(int diasAfastado) {
		this.situacaoColaborador = SituacaoColaborador.AFASTADO;
		this.diasAfastado += diasAfastado;
	}
	
	// Gera uma férias para o colaborador
	// Deve receber por paramêtro a quantidade de dias de férias
	public void gerarFerias(int diasFerias) {
		this.situacaoColaborador = SituacaoColaborador.FERIAS;
		this.diasFerias += diasFerias;
	}
	
	// Gera uma demissão para o colaborador
	// Deve receber por paramêtro a data de demissão
	public void gerarDemissao(LocalDate dataDemissao) {
		this.situacaoColaborador = SituacaoColaborador.DEMITIDO;
		this.dataFinal = dataDemissao;
	}
	
	// Aumenta o salário do colaborador
	// Deve receber por paramêtro a porcentagem de bonificação
	public void bonificacaoSalarial(double bonificacao) {
		double aumento = this.remuneracao * bonificacao / 100;
		this.remuneracao += aumento;
	}
	@Override
	public int hashCode() {
		return Objects.hash(cargo, cpf);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;	
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Colaborador other = (Colaborador) obj;
		return Objects.equals(cargo, other.cargo) && Objects.equals(cpf, other.cpf);
	}
	
	

}
