package com.gestao_pessoas.tccII.config;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.gestao_pessoas.tccII.entities.Cargo;
import com.gestao_pessoas.tccII.entities.Colaborador;
import com.gestao_pessoas.tccII.entities.Empresa;
import com.gestao_pessoas.tccII.entities.PlanoCarreira;
import com.gestao_pessoas.tccII.entities.Setor;
import com.gestao_pessoas.tccII.enums.NivelPlanoCarreira;
import com.gestao_pessoas.tccII.enums.Sexo;
import com.gestao_pessoas.tccII.enums.SituacaoColaborador;
import com.gestao_pessoas.tccII.repositories.CargoRepository;
import com.gestao_pessoas.tccII.repositories.ColaboradorRepository;
import com.gestao_pessoas.tccII.repositories.EmpresaRepository;
import com.gestao_pessoas.tccII.repositories.PlanoCarreiraRepository;
import com.gestao_pessoas.tccII.repositories.SetorRepository;

// Classe de configuração TESTE, exclusiva para popular banco de dados H2

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner{
	
	@Autowired
	private EmpresaRepository empresaRepository;
	@Autowired
	private SetorRepository setorRepository;
	@Autowired
	private CargoRepository cargoRepository;
	@Autowired
	private PlanoCarreiraRepository planoCarreiraRepository;
	@Autowired
	private ColaboradorRepository colaboradorRepository;	

	@Override
	public void run(String... args) throws Exception {
		
		//Empresa
		Empresa emp1 = new Empresa("Empresa número um LTDA.", "99921233000194");
		empresaRepository.save(emp1);
			
		//Setor
		Setor set1 = new Setor("Serviços", "Setor de sucesso ao cliente, suporte técnico.", emp1);
		Setor set2 = new Setor("Desenvolvimento", "Setor de desenvolvimento e produto.", emp1);
		Setor set3 = new Setor("Implantação", "Setor de implantação, inclusão e migração de dados.", emp1);
		Setor set4 = new Setor("Atendimento/Suporte", "Setor de atendimento ao cliente, suporte básico.", emp1);
		Setor set5 = new Setor("Marketing", "Setor de marketing, propaganda e publicidade.", emp1);
		Setor set6 = new Setor("Administração", "Setor de administração.", emp1);
		List<Setor> setores = new ArrayList<>();
		setores.add(set1);
		setores.add(set2);
		setores.add(set3);
		setores.add(set4);
		setores.add(set5);
		setores.add(set6);
		emp1.setSetores(setores);
		setorRepository.saveAll(setores);
		
		//Plano de carreira
		PlanoCarreira plano1 = new PlanoCarreira("Plano C 0 - 10 anos.", NivelPlanoCarreira.JUNIOR, 2500.00);
		PlanoCarreira plano2 = new PlanoCarreira("Plano B 10 - 20 anos.", NivelPlanoCarreira.JUNIOR, 5000.00);
		PlanoCarreira plano3 = new PlanoCarreira("Plano A 20 - 30 anos.", NivelPlanoCarreira.JUNIOR, 10000.00);
		planoCarreiraRepository.save(plano1);
		planoCarreiraRepository.save(plano2);
		planoCarreiraRepository.save(plano3);

		//Cargo
		Cargo cargo1 = new Cargo("Analista I", "Analista nível inicial (junior).", emp1, set1, plano1);
		Cargo cargo2 = new Cargo("Analista II", "Analista nível intermediario (pleno).", emp1, set1, plano2);
		Cargo cargo3 = new Cargo("Desenvolvedor I", "Desenvolvedor nível inicial (junior).",  emp1, set2, plano1);
		Cargo cargo4 = new Cargo("Desenvolvedor II", "Desenvolvedor nível intermediario (pleno).",  emp1, set2, plano2);
		Cargo cargo5 = new Cargo("Assistente Administrativo", "Presta assistência nos serviços burocráticos administrativos.",  emp1, set2, plano1);
		Cargo cargo6 = new Cargo("Auxiliar Administrativo", "Presta auxílio nos serviços burocráticos administrativos.",  emp1, set2, plano2);
		Cargo cargo7 = new Cargo("Coordenador", "Coordena e gerência pequenas equipes.",  emp1, set2, plano3);
		Cargo cargo8 = new Cargo("Especialista", "Presta serviços de maiores complexidades.",  emp1, set2, plano3);
		List<Cargo> cargos = new ArrayList<>();
		plano1.setCargos(cargos);
		cargos.add(cargo1);
		cargos.add(cargo2);
		cargos.add(cargo3);
		cargos.add(cargo4);
		cargos.add(cargo5);
		cargos.add(cargo6);
		cargos.add(cargo7);
		cargos.add(cargo8);
		cargoRepository.saveAll(cargos);
		
		//Colaborador
		Colaborador colaborador1 = new Colaborador(
				"Artur de Jesus Cadorin",
				LocalDate.of(1995, 11, 24),
				"70528232096", 
				"419859160",
				Sexo.MASCULINO,
				emp1, 
				set1, 
				cargo8);
		Colaborador colaborador2 = new Colaborador(
				"Ana Beatriz",
				LocalDate.of(1997, 8, 17),
				"80983639027", 
				"403894360",
				Sexo.FEMININO,
				emp1, 
				set5, 
				cargo1);
		colaborador2.setSituacaoColaborador(SituacaoColaborador.DEMITIDO);
		Colaborador colaborador3 = new Colaborador(
				"João Pedro",
				LocalDate.of(1992, 2, 7),
				"77000170000", 
				"370444899",
				Sexo.MASCULINO,
				emp1, 
				set2, 
				cargo4);
		Colaborador colaborador4 = new Colaborador(
				"Lívia Francisco Cadorin",
				LocalDate.of(1999, 7, 25),
				"26562427037", 
				"408440016",
				Sexo.FEMININO,
				emp1, 
				set2, 
				cargo7);
		colaborador4.setSituacaoColaborador(SituacaoColaborador.FERIAS);
		Colaborador colaborador5 = new Colaborador(
				"Isabella Martins",
				LocalDate.of(1995, 12, 5),
				"31066583048", 
				"364230629",
				Sexo.FEMININO,
				emp1, 
				set6, 
				cargo6);
		colaborador5.setSituacaoColaborador(SituacaoColaborador.AFASTADO);
		List<Colaborador> colaboradores = new ArrayList<>();
		colaboradores.add(colaborador1);
		colaboradores.add(colaborador2);
		colaboradores.add(colaborador3);
		colaboradores.add(colaborador4);
		colaboradores.add(colaborador5);
		colaboradorRepository.saveAll(colaboradores);
		
		
	}
}
