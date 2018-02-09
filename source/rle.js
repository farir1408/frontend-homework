'use strict'

const REGEXP = /(.)\1*/g;

const rle = string => {
	return string.match(REGEXP).reduce((result, element) => {
		return result + element[0] + (element.length > 1 ? element.length : '')
	}, '');
}
