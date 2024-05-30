

export const fmtImporte = function (nro, def) {
    def || (def = '---');
  
    if (isNaN(nro) || Number(nro) === 0) {
      return def;
    }
  
    var p = Number(nro).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").split('.'),
      d = p.pop();
  
    return "$" + p.join('.') + ',' + d;
}