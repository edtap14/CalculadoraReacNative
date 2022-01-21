import React from 'react';
import {View, Text} from 'react-native';
import BottonCalc from '../components/BottonCalc';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export default function CalculadoraScreen() {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDel,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BottonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BottonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BottonCalc texto="del" color="#9B9B9B" accion={btnDel} />
        <BottonCalc texto="/" color="#FF9427" accion={btnDividir} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BottonCalc texto="7" accion={armarNumero} />
        <BottonCalc texto="8" accion={armarNumero} />
        <BottonCalc texto="9" accion={armarNumero} />
        <BottonCalc texto="X" color="#FF9427" accion={btnMultiplicar} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BottonCalc texto="4" accion={armarNumero} />
        <BottonCalc texto="5" accion={armarNumero} />
        <BottonCalc texto="6" accion={armarNumero} />
        <BottonCalc texto="-" color="#FF9427" accion={btnRestar} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BottonCalc texto="1" accion={armarNumero} />
        <BottonCalc texto="2" accion={armarNumero} />
        <BottonCalc texto="3" accion={armarNumero} />
        <BottonCalc texto="+" color="#FF9427" accion={btnSumar} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BottonCalc texto="0" ancho accion={armarNumero} />
        <BottonCalc texto="." accion={armarNumero} />
        <BottonCalc texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
}
