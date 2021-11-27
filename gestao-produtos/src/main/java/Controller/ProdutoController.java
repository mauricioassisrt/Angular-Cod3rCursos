package Controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Model.Produtos;
import Repository.ProdutoRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
public class ProdutoController {

	ProdutoRepository repository;

	@GetMapping("/produtos")
	public List<Produtos> getAllProdutos() {

		return repository.findAll();
	}

	@PostMapping("/produtos")
	public Produtos saveProduto(@RequestBody Produtos produto) {
		return repository.save(produto);
	}

	@GetMapping("/produtos/{id}")
	public Produtos getProdutosById(@PathVariable Long id) {

		return repository.findById(id).get();
	}

	@DeleteMapping("produtos/{id}")
	public void deleteProduto(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
