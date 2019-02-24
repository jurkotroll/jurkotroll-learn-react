import React from 'react';

function MojKomponent({ title = [], content = {}}) {
	console.log(title[0])
	return (
		<div>
			{
    	// <dialog open>
			}
    		<h1>{title[0]}</h1>
    		<p>{content.keyll}</p>
		{
  		// </dialog>
			}
			<hr />
		</div>
	);
}

const todos = (toprint) => {
	console.log(toprint)
}

const About = () => (
  <div>
    <h2>About</h2>
		<hr />

		<MojKomponent title="Tytuł 1"/>


		<MojKomponent title={3} />

 		<MojKomponent title="Keyll" content={{keyll: "LOL"}} onClick={todos}/>

 		<MojKomponent title="Tytuł 2" content={{keyll: "Treść"}}/>


 		<MojKomponent title={["Tytuł 2", "Tytul 3"]} content={{keyll: "Treść"}}/>

		<MojKomponent title={[<div>LOL2LOL</div>]} content={{keyll: "Treść"}}/>
{
// 		<MojKomponent title="Tytuł 2" content={{keyll: "Treść"}}/>
// 		<MojKomponent title="Tytuł 2" content={{keyll: "Treść"}}/>
}




  </div>
);







export default About;
