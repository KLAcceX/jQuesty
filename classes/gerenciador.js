const CONSTRUTOR_CLASSE = {
	Status : function(hp, mp, forca, agilidade, vitalidade, inteligencia, destreza, espirito) {
		return {
			Hp: hp,
			Mp: mp,
			Forca: forca,
			Agilidade: agilidade,
			Vitalidade: vitalidade,
			Inteligencia: inteligencia,
			Destreza: destreza,
			Espirito: espirito,
		}	
	},
	Poder : function(ativo, descricao, danoBase, custo){
		return { "Tipo": ativo ? "Ativo" : "Passivo", "Descricao" : descricao, "Contador" : danoBase, "Custo" : custo};
	} //verificar alternancias: pode haver mais de um tipo de objetos para serem tratados como habilidades
};

