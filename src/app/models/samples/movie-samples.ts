import { Movie } from '../types/movie';

export const movieSamples: Movie[] = [
  {
    id: 1,
    cover: '/assets/star-war-a-new-hope-cover.jpg',
    name: 'Star Wars - Uma nova esperança',
    status: 'watched',
    comments:
      'Luke Skywalker sonha ir para a Academia como seus amigos, mas se vê envolvido em uma guerra intergalática' +
      'quando seu tio compra dois robôs e com eles encontra uma mensagem da princesa Leia Organa para o jedi Obi-Wan Kenobi' +
      'sobre os planos da construção da Estrela da Morte, uma gigantesca estação espacial com capacidade para destruir um planeta.' +
      'Luke então se junta aos cavaleiros jedi e a Hans Solo, um mercenário, e junto com membros da resistência tentam destruir esta terrível ameaça.',
  },
  {
    id: 2,
    cover: '/assets/coming-to-america-cover.jpg',
    name: 'Um principe em Nova York',
    status: 'watched',
    comments:
      'Akeem (Eddie Murphy), príncipe herdeiro de Zamunda, África, se rebela contra o casamento arranjando por seu pai, o rei Jaffe Joffer (James Earl Jones), que concorda que o filho viaje por 40 dias.' +
      'Assim Akeem vai para Nova York, se passando por um pobre estudante para encontrar uma noiva que não o ame por sua posição.' +
      'Vai trabalhar em uma lanchonete e sente-se atraído por Lisa (Shari Hadley), a filha do seu patrão, Cleo McDowell (John Amos), que é interesseiro e atrapalha o romance,' +
      'pois quer um bom partido para a filha, sem imaginar quem é na verdade seu funcionário. Akeem viajou com Semmi (Arsenio Hall), seu melhor amigo, que não gosta de se passar por pobre ' +
      'e faz gastos e toma atitudes que podem revelar a identidade de Akeem.',
  },
];
