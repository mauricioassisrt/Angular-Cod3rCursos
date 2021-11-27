package com.produtos.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class ProdutosController {

	@Autowired
	private ProdutosRepository repository;

	@GetMapping("produtos")
	public List<Produtos> listar() {
		return repository.findAll();
	}

	@PostMapping("produtos")
	public Produtos adicionar(@RequestBody Produtos produto) {

		return repository.save(produto);
	}

	@GetMapping("produtos/{id}")
	
	public Produtos getCarroById(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
	
	 @DeleteMapping("produtos/{id}")
	  public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
	    try {
	    	repository.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	 
	 @PutMapping("/produtos/{id}")
	  public ResponseEntity<Produtos> updateProdutos(@PathVariable("id") long id, @RequestBody Produtos prod) {
	    Optional<Produtos> dados = repository.findById(id);
	    if (dados.isPresent()) {
	      return new ResponseEntity<>(repository.save(prod), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }

}
