import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 

class App extends Component {
	state = {
    word_1_english: "now",
    word_2_english:"yesterday",
    word_3_english:"fine",
    word_4_english:"window",
    word_5_english:"door",
    word_6_english:"cinema",
    word_7_english:"react",
    word_8_english:"thoughts",
    word_9_english:"song",
    word_10_english:"movie",
    word_11_english:"love",
    word_12_english:"dance",
    word_13_english:"bed",
    word_14_english:"drinks",
    word_15_english:"sleep",
    word_16_english:"funny",
    word_17_english:"streets",
    word_18_english:"joy",
    word_19_english:"happiness",
    word_20_english:"misery",

    word_1_german: "jetzt",
    word_2_german:"gestern",
    word_3_german:"gut",
    word_4_german:"Fenster",
    word_5_german:"Tür",
    word_6_german:"Kino",
    word_7_german:"reagieren",
    word_8_german:"Gedanken",
    word_9_german:"Lied",
    word_10_german:"Film",
    word_11_german:"Liebe",
    word_12_german:"tanzen",
    word_13_german:"Bett",
    word_14_german:"Getränke",
    word_15_german:"schlaf",
    word_16_german:"lustig",
    word_17_german:"Straßen",
    word_18_german:"freude",
    word_19_german:"Glück",
    word_20_german:"Elend",






    outputvalue:"",
    inputvalue:"",

    english:"English",
    german:"German"
    


  };

input_one(event) {
        console.log(event.target.value);
        this.setState({
             inputvalue:event.target.value
        })
    }

input_two(event) {
        console.log(event.target.value);
        this.setState({
             outputvalue:event.target.value
        })
    }



   _handleKeyPress = (e) => {
    if (e.key === 'Enter') {

    	if (e.target.value==this.state.word_1_english)
    	{
        this.setState({
         outputvalue: this.state.word_1_german,
         inputvalue:e.target.value
      
     
     
    });

     }

else    if (e.target.value==this.state.word_1_german)
        {
        this.setState({
         outputvalue: this.state.word_1_english,
         inputvalue:e.target.value
    });

     }






else    if (e.target.value==this.state.word_2_english)
        {
        this.setState({
         outputvalue: this.state.word_2_german,
         inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_2_german)
        {
        this.setState({
         outputvalue: this.state.word_2_english,
         inputvalue:e.target.value
    });

     }


else    if (e.target.value==this.state.word_3_english)
        {
        this.setState({
         outputvalue: this.state.word_3_german,
         inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_3_german)
        {
        this.setState({
         outputvalue: this.state.word_3_english,
         inputvalue:e.target.value
    });

     }

 else    if (e.target.value==this.state.word_4_english)
        {
        this.setState({
         outputvalue: this.state.word_4_german,
         inputvalue:e.target.value
    });

     }

 else    if (e.target.value==this.state.word_4_german)
        {
        this.setState({
         outputvalue: this.state.word_4_english,
         inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_5_english)
        {
        this.setState({
      outputvalue: this.state.word_5_german,
     inputvalue:e.target.value
    });

     }


     else    if (e.target.value==this.state.word_5_german)
        {
        this.setState({
      outputvalue: this.state.word_5_english,
     inputvalue:e.target.value
    });

     }



else    if (e.target.value==this.state.word_6_english)
        {
        this.setState({
      outputvalue: this.state.word_6_german,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_6_german)
        {
        this.setState({
      outputvalue: this.state.word_5_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_7_english)
        {
        this.setState({
      outputvalue: this.state.word_7_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_7_german)
        {
        this.setState({
      outputvalue: this.state.word_5_english,
     inputvalue:e.target.value
    });

     }


else    if (e.target.value==this.state.word_8_english)
        {
        this.setState({
      outputvalue: this.state.word_8_german,
     inputvalue:e.target.value
    });

     }
     else    if (e.target.value==this.state.word_8_german)
        {
        this.setState({
      outputvalue: this.state.word_8_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_9_english)
        {
        this.setState({
      outputvalue: this.state.word_9_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_9_german)
        {
        this.setState({
      outputvalue: this.state.word_9_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_10_english)
        {
        this.setState({
      outputvalue: this.state.word_10_german,
     inputvalue:e.target.value
    });

     }

     else    if (e.target.value==this.state.word_10_german)
        {
        this.setState({
      outputvalue: this.state.word_10_english,
     inputvalue:e.target.value
    });

     }


else    if (e.target.value==this.state.word_11_english)
        {
        this.setState({
      outputvalue: this.state.word_11_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_11_german)
        {
        this.setState({
      outputvalue: this.state.word_11_english,
     inputvalue:e.target.value
    });

     }


else    if (e.target.value==this.state.word_12_english)
        {
        this.setState({
      outputvalue: this.state.word_12_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_12_german)
        {
        this.setState({
      outputvalue: this.state.word_12_english,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_13_english)
        {
        this.setState({
      outputvalue: this.state.word_13_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_13_german)
        {
        this.setState({
      outputvalue: this.state.word_13_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_14_english)
        {
        this.setState({
      outputvalue: this.state.word_14_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_14_german)
        {
        this.setState({
      outputvalue: this.state.word_14_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_15_english)
        {
        this.setState({
      outputvalue: this.state.word_15_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_15_german)
        {
        this.setState({
      outputvalue: this.state.word_15_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_16_english)
        {
        this.setState({
      outputvalue: this.state.word_16_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_16_german)
        {
        this.setState({
      outputvalue: this.state.word_16_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_17_english)
        {
        this.setState({
      outputvalue: this.state.word_17_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_17_german)
        {
        this.setState({
      outputvalue: this.state.word_17_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_18_english)
        {
        this.setState({
      outputvalue: this.state.word_18_german,
     inputvalue:e.target.value
    });

     }
     else    if (e.target.value==this.state.word_18_german)
        {
        this.setState({
      outputvalue: this.state.word_18_english,
     inputvalue:e.target.value
    });

     }


else    if (e.target.value==this.state.word_19_english)
        {
        this.setState({
      outputvalue: this.state.word_19_german,
     inputvalue:e.target.value
    });

     }
else    if (e.target.value==this.state.word_19_german)
        {
        this.setState({
      outputvalue: this.state.word_19_english,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_20_english)
        {
        this.setState({
      outputvalue: this.state.word_20_german,
     inputvalue:e.target.value
    });

     }

else    if (e.target.value==this.state.word_20_german)
        {
        this.setState({
      outputvalue: this.state.word_20_english,
     inputvalue:e.target.value
    });

     }







    }





  }

activate(event) {
 
             this.setState({
                
      
    outputvalue:this.state.inputvalue,
    inputvalue:this.state.outputvalue,
    english:this.state.german,
    german:this.state.english
      
    });
    console.log(this.state.outputvalue);  
    console.log(this.state. inputvalue);
         }



  render() {
    return (
 
<div class="container backgr">
    <div class="row ">
        <div class="col-lg-2 col-md-2 col-12 "> 
        </div>


    <div class="col-lg-8 col-md-8 col-12 two">
            <div class="translation">
                <p class="English"> {this.state.english} </p>
                    <input type="text" placeholder = "Write here.." onChange={this.input_one.bind(this)} value={this.state.inputvalue}onKeyPress={this._handleKeyPress} class="input_css" />
                    
                   
            <div class="button_class"><button onClick={this.activate.bind(this)} >
                        Switch Language
                    </button>
                    </div>
                    <p class="German"> {this.state.german} </p>
                    <input type="text"  onChange={this.input_two.bind(this)} value={this.state.outputvalue} onKeyPress={this._handleKeyPress} class="input_css"/>
                    
            </div>
    </div>

    <div class="col-lg-2 col-md-2 col-12 "> 
    </div>
</div>
 </div>
    );
  }
}

export default App;
