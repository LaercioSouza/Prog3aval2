
function sub(event){

	alert('lista dos candidatos')
	const xhr = new XMLHttpRequest()
	xhr.open('POST', '/candidato' , true)
	xhr.onload = (event) => {
		
		click(xhr, event)
	}
	const algo = 10
	xhr.send(algo)



}

function click(xhr, event){

	
	if (xhr.status != 200) {
		
        return;
    }
	const data = JSON.parse(xhr.response)
	const trfirst = document.getElementById('m')
	data.forEach((cand) => {
        let td = document.createElement('tr')
        if(cand.cargo == 6){
        	cand.cargo = 'Deputado Federal'
        }else if(cand.cargo == 1){
        	cand.cargo = 'Presidente'
        }else if(cand.cargo == 3){
        	cand.cargo = 'Governador'
        }else if(cand.cargo == 5){
        	cand.cargo = 'Senador'
        }else if(cand.cargo == 7){
        	cand.cargo =  'Deputado Estadual'

        }else if (cand.status == 1){
        	cand.status = 'eleito'
        }else if(cand.status == 0){
        	cand.status = 'não eleito'
        }
        td.innerHTML = `<td>${cand.id}</td> <td> ${cand.cargo}</td> <td>${cand.nome}</td> <td>${cand.tipo}</td> <td>${cand.status}</td>`
		trfirst.appendChild(td)
        
    })

}

function estaduais(event){
	alert('deputados estaduais')
	const xhr = new XMLHttpRequest()
	xhr.onload = (event) => {
		clickestatual(xhr, event)
	}
	xhr.open('POST', '/estaduais' , true)
	const algo = 10
	xhr.send(algo)


}

function clickestatual(xhr, event){
		if (xhr.status != 200) {
		
        return;
    }
		const data = JSON.parse(xhr.response)
		const trfirst = document.getElementById('d')
		data.forEach((cand) => {
		if(cand.cargo == 7){
		cand.cargo = 'Deputado Estadual'
		}
        const td = document.createElement('tr')
        td.innerHTML = `<td>${cand.id}</td> <td> ${cand.cargo}</td> <td>${cand.nome}</td> <td>${cand.status}</td>`
		trfirst.appendChild(td)
        
    })

}

function federal(){

		alert('deputados federais')
		const xhr = new XMLHttpRequest()
		xhr.onload = (event) => {
		clickestatual(xhr, event)
	}
		xhr.open('POST', '/federais' , true)
		const algo = 10
		xhr.send(algo)


}

function clickfederal(){

			if (xhr.status != 200) {
		
       		 return;
    }
			const data = JSON.parse(xhr.response)
			const trfirst = document.getElementById('dep')
			data.forEach((cand) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.id}</td> <td>${cand.cargo}</td><td>${cand.nome}</td><td>${cand.status}</td>`
        	trfirst.appendChild(td)
        
    })

}

function governador(event){
		alert('governador')
		const xhr = new XMLHttpRequest()
		xhr.onload = (event) => {
		clickgovernador(xhr, event)
	}
	xhr.open('POST', '/governador' , true)
	const algo = 10
	xhr.send(algo)

}

function clickgovernador(xhr, event){
			if (xhr.status != 200) {
		
       		 return;
    }
			const data = JSON.parse(xhr.response)
			const trfirst = document.getElementById('g')
			data.forEach((cand) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.id}</td> <td> ${cand.cargo}</td> <td>${cand.nome}</td><td>${cand.status}</td>`
			trfirst.appendChild(td)
        
    })
}

function senador(event){
		alert('senadores')
		const xhr = new XMLHttpRequest()
		xhr.onload = (event) => {
		clickgovernador(xhr, event)
	}
	xhr.open('POST', '/senador' , true)
	const algo = 10
	xhr.send(algo)

}

function clicksenador(xhr,event){
				if (xhr.status != 200) {
		
       		 return;
    }
			const data = JSON.parse(xhr.response)
			const trfirst = document.getElementById('sin')
			data.forEach((cand) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.id}</td> <td> ${cand.cargo}</td> <td>${cand.nome}</td> <td>${cand.status}</td>`
			trfirst.appendChild(td)
        
    })

}

function presidente(event){
		alert('presidente')
		const xhr = new XMLHttpRequest()
		xhr.onload = (event) => {
		clickgovernador(xhr, event)
	}
	xhr.open('POST', '/presidente' , true)
	const algo = 10
	xhr.send(algo)

}

function clickpresidente(xhr,event){

			 if (xhr.status != 200) {
		
       		 return;
    			}
			const data = JSON.parse(xhr.response)
			const trfirst = document.getElementById('pres')
			data.forEach((cand) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.id}</td> <td> ${cand.nome}</td> <td>${cand.cargo}</td> <td>${cand.tipo}</td> <td>${cand.status}</td>`
			trfirst.appendChild(td)
        
    })

}

function selectcity(event){
	alert("municipios")
	const xhr = new XMLHttpRequest()
		  xhr.onload = (event) => {
		  responsecity(xhr, event)
	}
	xhr.open('POST', '/city' , true)

	let a = 10
	
	xhr.send(a)


}

function responsecity(xhr, event){

		if (xhr.status != 200) {
		return;
    	}
		const data = JSON.parse(xhr.response)
		const trfirst = document.getElementById('municipios')
		data.forEach((muni) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${muni.id}</td> <td> ${muni.nome}</td> <td>${muni.uespi}</td>`
			trfirst.appendChild(td)
        
    })
}

function result(event){
	alert('resultado geral')
		const xhr = new XMLHttpRequest()
		  xhr.onload = (event) => {
		  responseresult(xhr, event)
	}
	xhr.open('POST', '/resultfinal' , true)

	let a = 10
	
	xhr.send(a)


}

function responseresult(xhr, event){

		if (xhr.status != 200) {
		return;
    	}
		const data = JSON.parse(xhr.response)
		const trfirst = document.getElementById('final')
		data.forEach((cand) => {
			 if(cand.cargo == 6){
        	cand.cargo = 'Deputado Federal'
       		 }else if(cand.cargo == 1){
        	cand.cargo = 'Presidente'
        	}else if(cand.cargo == 3){
        	cand.cargo = 'Governador'
        	}else if(cand.cargo == 5){
        	cand.cargo = 'Senador'
       	    }else if(cand.cargo == 7){
        	cand.cargo =  'Deputado Estadual'

    	    }else if (cand.status == 1){
        	cand.status = 'eleito'
        	}else if(cand.status == 0){
        	cand.status = 'não eleito'
        	}
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.nome}</td> <td> ${cand.cargo}</td> <td>${cand.status}</td>`
			trfirst.appendChild(td)
        
    })


}








/*
const key = document.getElementById("cl")
key.addEventListener('click', () => {
	alert('clicou')

});
*/

