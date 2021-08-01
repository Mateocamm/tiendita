export function FormatCurrency(value, currency = "IDR") {
    var formatter;
  
    if (value == 0) return "";
    if (!value) return "";
  
    switch (currency) {
      case "IDR":
        formatter = new Intl.NumberFormat("id", {
          style: "currency",
          currencyDisplay: "symbol",
          currency: "IDR",
          minimumFractionDigits: 0,
        });
        return formatter.format(value);
  
      case "EUR":
        formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currencyDisplay: "symbol",
          currency: "EUR",
          minimumFractionDigits: 2,
        });
  
        return formatter.format(value);
        break;
  
      case "USD":
        formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currencyDisplay: "symbol",
          currency: "USD",
          minimumFractionDigits: 2,
        });
  
        return formatter.format(value);
        break;
  
      case "ARS":
        formatter = new Intl.NumberFormat("es-ar", {
          style: "currency",
          currencyDisplay: "narrowSymbol",
          currency: "ARS",
          minimumFractionDigits: 2,
        });
  
        return formatter.format(value);
        break;
  
      case "THB":
        formatter = new Intl.NumberFormat("th-TH", {
          style: "currency",
          currencyDisplay: "symbol",
          currency: "THB",
          minimumFractionDigits: 0,
        });
  
        return formatter.format(value);
        break;
  
      case "NO":
        return value;
  
      default:
        break;
  
        return value;
    }
  }
  