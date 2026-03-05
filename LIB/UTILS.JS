import jwt from 'jsonwebtoken';

export function gerarToken(usuario) {
  return jwt.sign(
    { 
      id: usuario._id, 
      email: usuario.email,
      nome: usuario.nome 
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verificarToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export function formatarWhatsApp(texto, numero = process.env.WHATSAPP_NUMBER) {
  const mensagem = encodeURIComponent(texto);
  return `https://wa.me/${numero}?text=${mensagem}`;
}

export function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

export function formatarData(data) {
  return new Date(data).toLocaleDateString('pt-BR');
}
