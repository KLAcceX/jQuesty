const classes = {
	criar : function(hp, mp, f, a, v, i, d){
		return {
			hp : { atual : hp, max : hp},
			mp : { atual : mp, max : mp},
			forca : f,
			agilidade : a,
			vitalidade : v,
			inteligencia : i,
			destreza : d,
		};
	},
	arqueiro : classes.criar(40, 100, 2, 7, 2, 1, 10),
	clerigo : classes.criar(70, 100, 2, 1, 7, 10, 2),
	druida : classes.criar(60, 110, 2, 2, 1, 10, 7),
	guerreiro : classes.criar(80, 70, 10, 2, 7, 1, 2),
	ladino : classes.criar(50, 80, 3, 10, 1, 1, 7),
	mago : clsses.criar(20, 200, 2, 2, 1, 10, 7),
}

const classes = []