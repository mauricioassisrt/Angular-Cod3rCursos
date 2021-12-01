package com.produtos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.produtos.model.Categoria;
import com.produtos.repository.CategoriaRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoriaController {

	@Autowired
	private CategoriaRepository repository;
	
	@GetMapping("categoria")
	public List<Categoria> listar(){
		return repository.findAll(); 
	}
}
