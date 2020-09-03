let Adm = require("../models/adm")

const AdmController = {
	index: (req, res, next) => {
		Adm.find().then(dado => {
			res.send(dado);
		})
		
	  // const adm = new Adm({nome: "Valdirene", senha: "123456", email: 'valdirenap@example.com'})
	  // adm.save(errors => {
		// if(errors)
		// {
			// res.send(errors)		  
			// return;
		// }
	  // })
	}
}

module.exports = AdmController;
