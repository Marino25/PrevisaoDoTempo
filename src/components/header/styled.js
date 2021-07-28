import styled from 'styled-components';

export const WrapperHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 100vh;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
       
        input {
            
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 2px;
            height: 60px;
            padding: 20px;
            font-size: 35px;
            width: 600px;
            position: relative;
            padding-right: 60px;
            outline-color: orange;
            margin: 50px 0;
            
                                           // Relative sempre no input//
        }
        
        img {
            
            height: 30px;
            weight: 30px;
            position: absolute;
            padding-right: 10px;          // Absolute sempre no imagem//
           
            }
        
    }
   
        
    
`;



export const Line = styled.hr` 
width: 700px;
border: 1px solid white;
position: relative;
flex-direction: column;
margin-top: 50px;
`;

export const Tittle = styled.h1` 
font-size: 80px;
color: white;
text-shadow: 3px 3px 1px black;

`;

export const WrapperTittle = styled.div` 
position: relative;


`;

export const WrapperContent = styled.div` 
display: flex;
width: 600px;
height: 300px;
margin-top: 30px;

.divEsq {
    
    width: 300px;
    height: 300px;
 
    align-items: flex-start;
    justify-content: left;
    flex-direction: column;
    

    .SubTittleCity {
        h1 {
            color: White;
            font-size: 50px;
            text-shadow: 1px 2px 1px black;
            
        }
    }

    .GrausEsq {
        margin-top: 20px;
        h2 {
            color: Black;
            font-size: 20px;
            margin-left: 5px;
            text-shadow: 
            -1px -1px 0px #FFF, 
            -1px 1px 0px #FFF,                    
             1px -1px 0px #FFF,                  
             1px 0px 0px #FFF;
           
        }
    }

    .TempNumbMinEsq {
        display: inline;
        margin-left: px;
        max-height: 60%;
        position: relative;
    
        h2 {
            color: black;
            font-size: 18px;
            font-family: 'Open Sans', sans-serif;
            margin-left: 10px;
        }
    }
    .TempNumbMaxEsq {
        display: inline;
        max-height: 60%;
        position: absolute;
        margin-left: 50px;
        margin-top: 103px;
        
    
        h2 {
            color: black;
            font-size: 18px;
            font-family: 'Open Sans', sans-serif;
            text-shadow: 
            
        }
    }    

    .CityNameEsq {
        display: inline;
        position: absolute;
        max-height: 60%;
        width: 200px;
        margin-top: 101px;
        margin-left: 100px;

        h4 {
            color: black;
            font-size: 18px;
            font-weight: normal;
            font-family: 'Open Sans', sans-serif;
            text-shadow: 1px 1px 1px black,
            1px 1px 1px white;
        }
    }
    
    
}


.divDir {
    display: flex;
    width: 300px;
    height: 300px;
    align-items: flex-start;
    justify-content: left;
    flex-direction: column;

    .GrausDir {
        margin-top: 75px;
        h2 {
            color: Black;
            font-size: 20px;
            margin-left: 5px;
            text-shadow: 
            -1px -1px 0px #FFF, 
            -1px 1px 0px #FFF,                    
             1px -1px 0px #FFF,                  
             1px 0px 0px #FFF;
        }
    }

    .TempNumbMinDir {
        display: inline;
        margin-left: 10px;
        max-height: 60%;
        margin-top: 0;
        position: relative;
    
        h2 {
            color: black;
            font-size: 18px;
            font-family: 'Open Sans', sans-serif;        }
    }

    .TempNumbMaxDir {
        display: inline;
        max-height: 60%;
        position: absolute;
        margin-left: 50px;
        margin-top: 98px;
        margin-border: red;
        h2 {
            color: black;
            font-size: 18px;
            font-family: 'Open Sans', sans-serif;
        }
    }    
   
    .CityNameDir {
        display: inline;
        position: absolute;
        max-height: 60%;
        width: 200px;
        margin-top: 97px;
        margin-left: 100px;

        h4 {
            color: black;
            font-size: 18px;
            font-weight: normal;
            font-family: 'Open Sans', sans-serif;
            text-shadow: 1px 1px 1px black,
            1px 1px 1px white;
        }
    }
}

`;






