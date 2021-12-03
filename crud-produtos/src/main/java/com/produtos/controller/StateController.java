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

import com.produtos.model.Produtos;
import com.produtos.model.State;
import com.produtos.repository.StateRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StateController {

	@Autowired
	private StateRepository repositoryA;

	@GetMapping("states")
	public List<State> listar() {
		return repositoryA.findAll();
	}
	

	@PostMapping("states")
	public State adicionar(@RequestBody State sto) {

		return repositoryA.save(sto);
	}

	@GetMapping("states/{id}")
	
	public State getStateById(@PathVariable Long id) {
		return repositoryA.findById(id).get();
	}
	
	
	 @DeleteMapping("states/{id}")
	  public ResponseEntity<HttpStatus> deleteState(@PathVariable("id") long id) {
	    try {
	    	repositoryA.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	 
	 @PutMapping("states/{id}")
	  public ResponseEntity<State> updateState(@PathVariable("id") long id, @RequestBody State state) {
	    Optional<State> dados = repositoryA.findById(id);
	   
	    dados.get().setName(state.getName());
	    dados.get().setInitials(state.getInitials());
	    
	    if (dados.isPresent()) {
	      return new ResponseEntity<>(repositoryA.save(dados.get()), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
}
