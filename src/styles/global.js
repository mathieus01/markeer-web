import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0
}

html, body, #root{
  height: 100%
}
input, select{
  appearance: none;
}

strong,p{
  letter-spacing: 0.5px;
}

:root {
  --primary-color: #2884FF;
  --danger-color: #F5003F;
  --light-color: #FFFAFF;

  --background-color: #ffffff;
  --title-color: #303036;
  --text-color: #A3A7B4;
  --svg-color:#0662E2;
  --text-color-white: #F8FEFC;
  --border-color: #201f1f17;
  --box-shadow-color: #eff0f4;
  --gradient-color: linear-gradient(180deg, #0FAFFf 0%, #1ab2ff 100%);
  --shadow-color: 0px 10px 30px #33bbff;
  --box-shadow: 0.7rem 0.75rem 1.5rem rgba(40, 132, 255, 0.05), 0.7rem 0rem 0.1rem rgba(18,38,63,.15);
  --box-shadow2: 0rem 0.05rem 1rem rgba(40, 132, 255, 0.075);
  --box-shadow3: 0rem 0.075rem 1.5rem rgba(40, 132, 255, 0.2);
  --border-bottom: 1px solid var(--light-color) !important;
  --fc-border-color: #eff2f7;
  $enable-gradients: true;
  

  /* font family variable */
  --roboto: 'Nunito';
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Nunito', sans-serif;
}

h6 {
    font-weight: 600;
  }


ul::-webkit-scrollbar {
  width: 0.25rem;
}

ul::-webkit-scrollbar-track {
  background: transparent;
}

ul::-webkit-scrollbar-thumb {
  background: var(--light-color);
}

button{
  cursor: pointer;
  outline:none !important;
}

a{
  text-decoration: none !important;
  color:inherit;
}
a:hover{
  color: inherit;
}

.h-90{
  height: 90% !important;
}

.button {
  padding: 0.8rem 2.2rem;
  font: normal 500 16px/20px var(--roboto);
  position: relative;
  border: 3px solid transparent;
  border-radius: 4px;
  background: transparent;
}

.text-primary{
  color: var(--primary-color)
}

.text-title-color{
  color:var(--title-color) !important;
}
.text-secondary-color{
  color:var(--text-color) !important;
}

.opacity-8{
  opacity: 0.8;
}

.light-button{
  background: var(--light-color);
}

.font-weight-600{
  font-weight: 600 !important;
}

.primary-button {
  background: var(--primary-color);
  color: whitesmoke;
  transition: border 1s cubic-bezier(.5,.01,.52,1), background 0.6s ease, color .8s cubic-bezier(.5,.01,.52,1);
  box-shadow: var(--box-shadow);
}

.btn-danger{
  color: var(--danger-color) !important;
  background-color: #fff !important;
  border: none !important; 
}



.button.primary-button::after,
.button.secondary-button::after {
  position: absolute;
  top: -2px;
  left: -2px;
  bottom: -2px;
  right: -2px;
  background: var(--gradient-color);
  content: '';

  z-index: -1;
  border-radius: 4px;
}

.card {
  border-radius: .5rem;
  padding: .875rem 0rem;
  background: #fff;
  border: none !important;

  @media(max-width: 1439px){
    padding: .875rem 1.25rem;
    border: 1px solid #f0f0f4 !important;
    box-shadow: var(--box-shadow2);
  }
  }

.border-right{
  border-right: 1px solid #f0f0f4 !important;
}

.border-left{
  border-left: 1px solid #f0f0f4 !important;
}


.list-group-item{
  padding: .5rem 1.5rem;
  margin-bottom: -1px !important;
  background-color: #fff;
  border-bottom: 1px solid #eff2f7 !important;
  border: 0px;
}

.adapter-text{
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 65%;
}

.icon {
    padding: 1rem;
    border-radius: 50%;
    height: fit-content;
  }
  .purple {
    background: #f2ebfb;
  }

  .blue {
    background: #eef9ff;
  }

  .orange {
    background: #fef3ef;
  }

  .red {
    background: #ffeff2;
  }

.modal-component {
    width:fit-content;
    min-width:fit-content;
    background-color: #fff;
    border-radius:12px;
    z-index:110;
}
.overlay {
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(72, 72, 72, 0.75);
    z-index:100;
  }

.my-node-appear{
  opacity: 0;
  transform: scale(0.7);
}
.my-node-appear-active{
  opacity: 1;
  transform: translateX(0);
  transition: opacity 750ms, transform 750ms;
}
.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 750ms, transform 750ms;
}
.my-node-exit {
  opacity: 1;
  transform: scale(0.7);
}
.my-node-exit-active {
  opacity: 0;
  transform: scale(0);
  transition: opacity 750ms, transform 750ms;
}

.text-primary{
  color: var(--primary-color) !important;
}

.fc-col-header-cell{
  border: 0px !important;
  color: var(--text-color) !important;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding: .75rem 1rem !important;
}
.fc-col-header-cell-cushion {
  padding: 0px !important;
}

.table-bordered td, .table-bordered th{
  border: 1px solid #F6F8FA !important;
}

.fc-daygrid-day-number{
    font-size: .875rem !important;
    font-weight: 600 !important;
    color: #a2acbb !important;
    float: right !important;
    width: 100%;
    padding:.5rem 1rem !important;
}

.fc .fc-scrollgrid-liquid {
  border: none !important;
}

.fc .fc-daygrid-day.fc-day-today{
  background-color: rgba(6, 139, 245, 0.15);
}

.fc-toolbar-title{
  color: var(--title-color) !important;
  font-size: 24px !important;
  font-weight: 400!important;
}

.fc-scrollgrid-sync-inner{
  text-align: left;
}

.fc .fc-highlight{
  background: rgba(51, 214, 159,0.3);
}

.infinite-scroll-component__outerdiv{
  width: 100%!important;
}

`;

export default GlobalStyle;
