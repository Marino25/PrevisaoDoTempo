import styled from 'styled-components';

export const ModalContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 800px;

   .divContent{
      width: 700px;
      height: 23px;
      justify-content: center;
      align-items: center;

      .divTittle {
         justify-content: flex-start;
         width: 200px;
         height: 23px;
         position: absolute;
         h4 {
            color: red;
         }
        
      }

      .divButton {
         display: flex;
         justify-content: flex-end;
         position: relative;
         
         button {
            width: 23px;
            height: 23px;
            border: none;
            outline: none;
            border-radius: 50%;
            background-color: white;
         }
      }

      .divPropsTempCenter {
         display: flex;
         justify-content: center;
         align-items: center;
         margin-top: 50px;
      }

      .divPropsTemp {
         display: flex;
         justify-content: center;
         align-items: center;
         margin-top: 40px;

            div {
               justify-content: center;
               align-items: center;
               h2 {
                  display: inline;
                  font-size: 25px;
                  margin-left: 5px;
               }
               h3 {
                  display: inline;
                  font-size: 25px;
               }
               
               h4 {
                  display: inline;
                  margin: 0 20px;
               }
            }

            
   }  
   .divLine {
      width: 700px;
      height: 10px;
      
   }
   .divPropsTempFooter {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      
      h2 {
         margin: 0 12px;
      }
   }

   .divDaysFooter{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      
      .divPropsTempFooterSeg {
         display: flex;
         justify-content: left;
         align-items: center;
         margin-left: 25px;
         margin-top: 10px;
         
         h3 {
           margin: 0 5px;
         }
         h4 {
            margin-right: 32px;
         }
      
      }

      .divPropsTempFooterTerc {
         display: flex;
         justify-content: center;
         align-items: center;
       
         h3 {
           margin: 0 2px;
           margin-top: 10px;
         }
         h4 {
            margin-right: 25px;
         }
      
      }

      .divPropsTempFooterQuart {
         display: flex;
         justify-content: center;
         align-items: center;
       
         h3 {
           margin: 0 2px;
           margin-top: 10px;
         }
         h4 {
            margin-right: 32px;
         }
      
      }
      
      .divPropsTempFooterQuint {
         display: flex;
         justify-content: center;
         align-items: center;
       
         h3 {
           margin: 0 2px;
           margin-top: 10px;
         }
         h4 {
            margin-right: 28px;
         }
      
      }

      .divPropsTempFooterSext {
         display: flex;
         justify-content: center;
         align-items: center;
       
         h3 {
           margin: 0 2px;
           margin-top: 10px;
         }
         h4 {
            margin-right: 25px;
         }
      
      }

      .divPropsTempFooterSab {
         display: flex;
         justify-content: center;
         align-items: center;
       
         h3 {
           margin: 0 2px;
           margin-top: 10px;
         }
         h4 {
            margin-right: 35px;
         }
      
      }
      
      .divPropsTempFooterDom {
         display: flex;
         justify-content: center;
         align-items: center;
       
         h3 {
           margin: 0 2px;
           margin-top: 10px;
         }
      
      }
   }
`;

export const Line = styled.hr` 
width: auto;
border: 1px solid orange;
margin-top: 30px;
display: flex;
background-color: orange;

`;


