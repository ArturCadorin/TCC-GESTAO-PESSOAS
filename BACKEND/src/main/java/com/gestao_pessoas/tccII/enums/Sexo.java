package com.gestao_pessoas.tccII.enums;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum Sexo {
	MASCULINO,
	FEMININO,
	OUTRO;
	
    @JsonCreator
    public static Sexo fromString(String value) {
        switch (value.toUpperCase()) {
            case "MASCULINO":
                return MASCULINO;
            case "FEMININO":
                return FEMININO;
            case "OUTRO":
                return OUTRO;
            default:
                throw new IllegalArgumentException("Valor inválido para Sexo: " + value);
        }
    }
}
