package com.produtos.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.produtos.model.City;
import com.produtos.model.State;
import com.produtos.repository.CityRepository;
import com.produtos.repository.ProdutosRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CityController {

	@Autowired
	private CityRepository repositoryA;
	
	@GetMapping("citys")
	public List<City> listar() {
		return repositoryA.findAll();
	}
	@PostMapping("citys")
	public City adicionar(@RequestBody City city) {
		System.out.print(city.getObjetoState().getId());
		
		return repositoryA.save(city);
		
	}

	@GetMapping("citys/{id}")

	public City getStateById(@PathVariable Long id) {
		return repositoryA.findById(id).get();
	}

	@DeleteMapping("citys/{id}")
	public ResponseEntity<HttpStatus> deleteState(@PathVariable("id") long id) {
		try {
			repositoryA.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("citys/{id}")
	public ResponseEntity<City> updateState(@PathVariable("id") long id, @RequestBody City city) {
		Optional<City> dados = repositoryA.findById(id);

		dados.get().setName(city.getName());
		dados.get().setObjetoState(city.getObjetoState());
		
		if (dados.isPresent()) {
			return new ResponseEntity<>(repositoryA.save(dados.get()), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
