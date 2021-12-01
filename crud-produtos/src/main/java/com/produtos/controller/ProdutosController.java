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
import com.produtos.repository.ProdutosRepository;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class ProdutosController {

	@Autowired
	private ProdutosRepository repository;

	@GetMapping("products")
	public List<Produtos> listar() {
		return repository.findAll();
	}

	@PostMapping("products")
	public Produtos adicionar(@RequestBody Produtos produto) {

		return repository.save(produto);
	}

	@GetMapping("products/{id}")
	
	public Produtos getCarroById(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
	
	 @DeleteMapping("products/{id}")
	  public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
	    try {
	    	repository.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	 
	 @PutMapping("products/{id}")
	  public ResponseEntity<Produtos> updateProdutos(@PathVariable("id") long id, @RequestBody Produtos prod) {
	    Optional<Produtos> dados = repository.findById(id);
	   
	    dados.get().setName(prod.getName());
	    dados.get().setPrice(prod.getPrice());
	    
	    if (dados.isPresent()) {
	      return new ResponseEntity<>(repository.save(dados.get()), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }

}
