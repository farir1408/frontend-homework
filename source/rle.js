'use strict'

const REGEXP = /(.)\1*/g;

const rle = (string) => {
	return string.match(REGEXP).map((element) => {
		return element[0] + (element.length > 1 ? element.length.toString() : '')
	}).join('');
}
