$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a){
	let results = "<h5>";
	results+= a[0].content + "</h5><p> By " + a[0].title + "</p>";
	document.getElementById("quotes").innerHTML = results;
});
let app = new Vue({
  el: '#app',
  data: {
				tripe: 0,
				chicken: 0,
				beef: 0,
				sriracha: 0,
				cilantro: 0,
				noodles: 0,
				eating: false,
				small: false,
				medium: false,
				large: false,
				extreme: false,

  },
  computed: {
		calories() {
			var calories = 150;
			calories += 75 * this.tripe;
			calories += 100 * this.chicken;
			calories += 150 * this.beef;
			calories += 30 * this.sriracha;
			calories += 5 * this.cilantro;
			calories += 200 * this.noodles;
			if(calories <= 400){
				this.small = true;
			}
			else if(calories <= 800 && calories > 400){
				this.medium = true;
			}
			else if(calories <= 1200 && calories > 800){
				this.large = true;
			}
			else if(calories > 1200){
				this.extreme = true;
			}
			return calories;
		}
  },
  methods: {
		addChicken(){
			this.chicken++;
			console.log(this.chicken);
		},
		addTripe(){
			this.tripe++;
		},
		addBeef(){
			this.beef++;
		},
		addCilantro(){
			this.cilantro++;
		},
		addSriracha(){
			this.sriracha++;
		},
		addNoodles(){
			this.noodles++;
		},
		eat(){
			this.eating = true;
			console.log(this.calories);
		},
		clear(){
			this.tripe = 0;
			this.chicken = 0;
			this.beef = 0;
			this.sriracha = 0;
			this.cilantro = 0;
			this.noodles = 0;
			this.eating = false;
			this.small = false;
			this.medium = false;
			this.large = false;
			this.extreme = false;
		},
  }
});
