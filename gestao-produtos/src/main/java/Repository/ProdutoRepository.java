package Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Model.Produtos;

public interface ProdutoRepository extends JpaRepository<Produtos, Long>{
	
	
}
