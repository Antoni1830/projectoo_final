"use client"; // Asegúrate de que este archivo sea un componente de cliente

import React, { useState, useEffect } from 'react';
import "./globals.css";

function ConversorMoneda() {
  const [monedaUno, setMonedaUno] = useState('USD');
  const [monedaDos, setMonedaDos] = useState('EUR');
  const [cantidadUno, setCantidadUno] = useState(1);
  const [cantidadDos, setCantidadDos] = useState('');
  const [cambio, setCambio] = useState('');

  // Función para obtener tasas de cambio desde una API pública
  const obtenerTasaCambio = async (from: string, to: string) => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const data = await response.json();
      return data.rates[to];
    } catch (error) {
      console.error('Error al obtener tasas de cambio:', error);
      return null;
    }
  };

  const calcularCambio = async () => {
    if (!cantidadUno || cantidadUno <= 0) {
      setCambio('Por favor ingresa una cantidad válida.');
      setCantidadDos('');
      return;
    }
      if (monedaUno === monedaDos) {
      const resultado = parseFloat;
      setCambio(`1 ${monedaUno} = 1 ${monedaDos}`);
      setCantidadDos(resultado.toString()); // Ensure it's a string
      return;
  }
  
    const tasa = await obtenerTasaCambio(monedaUno, monedaDos);
    if (tasa) {
      const resultado = (cantidadUno * tasa).toFixed(2);
      setCambio(`1 ${monedaUno} = ${tasa.toFixed(4)} ${monedaDos}`);
      setCantidadDos(resultado);
    } else {
      setCambio('No se pudo obtener la tasa de cambio.');
      setCantidadDos('');
    }
  };

  // Recalcula el cambio cuando cambian monedas o cantidad
  useEffect(() => {
    calcularCambio();
  }, [monedaUno, monedaDos, cantidadUno]);

  // Función para intercambiar monedas
  const intercambiarMonedas = () => {
    setMonedaUno(monedaDos);
    setMonedaDos(monedaUno);
  };

  return (
    <div>
      <img src="./logo.png" alt="" className="conversor-imagen" />
      <h1>Conversor de moneda</h1>
      <p>Escoje la moneda y la cantidad para realizar la conversión</p>
      
      <div className="container">
        <div className="moneda">
          <select id="moneda-uno" value={monedaUno} onChange={(e) => setMonedaUno(e.target.value)}>
            {/* Opciones de monedas */}
            <option value="AED">AED</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="BSD">BSD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="COP">COP</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOP">DOP</option>
            <option value="EGP">EGP</option>
            <option value="EUR">EUR</option>
            <option value="FJD">FJD</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PAB">PAB</option>
            <option value="PEN">PEN</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="PLN">PLN</option>
            <option value="PYG">PYG</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="UYU">UYU</option>
            <option value="VND">VND</option>
            <option value="ZAR">ZAR</option>
          </select>

          <input 
            type="number" 
            id="cantidad-uno" 
            placeholder="0"  
            value={cantidadUno}
            onChange={(e) => setCantidadUno(e.target.value)}
          />
        </div>

        <div className="taza-cambio-container">
          <button className="btn" id="taza" onClick={intercambiarMonedas}>
            Intercambiar
          </button>

          <div className="cambio" id="cambio">{cambio}</div>
        </div>

        <div className="moneda">
          <select id="moneda-dos" value={monedaDos} onChange={(e) => setMonedaDos(e.target.value)}>
            {/* Repetir opciones */}
            <option value="AED">AED</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="BSD">BSD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="COP">COP</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOP">DOP</option>
            <option value="EGP">EGP</option>
            <option value="EUR">EUR</option>
            <option value="FJD">FJD</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PAB">PAB</option>
            <option value="PEN">PEN</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="PLN">PLN</option>
            <option value="PYG">PYG</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="UYU">UYU</option>
            <option value="VND">VND</option>
            <option value="ZAR">ZAR</option>
          </select>

          <input 
            type="number" 
            id="cantidad-dos" 
            placeholder="0"
            value={cantidadDos}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default ConversorMoneda;
