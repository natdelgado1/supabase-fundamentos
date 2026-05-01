export interface Post {
  id: number | string;
  image_url: string;
  caption: string;
  likes: number;
  created_at: Date;
  updated_at?: Date;
}

// Lista unificada de posts para home y ranking
export const posts: Post[] = [
  {
    id: 1,
    image_url: "https://picsum.photos/seed/rank1/600/600",
    caption: "Atardecer en la playa, momentos que valen oro",
    likes: 1250,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2), // hace 2 horas
  },
  {
    id: 2,
    image_url: "https://picsum.photos/seed/rank2/600/600",
    caption: "Explorando nuevos lugares cada día",
    likes: 980,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 8), // hace 8 horas
  },
  {
    id: 3,
    image_url: "https://picsum.photos/seed/rank3/600/600",
    caption: "Código y café, la combinación perfecta",
    likes: 875,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24), // hace 1 día
  },
  {
    id: 4,
    image_url: "https://picsum.photos/seed/rank4/600/600",
    caption: "Nuevo proyecto terminado!",
    likes: 654,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // hace 2 días
  },
  {
    id: 5,
    image_url: "https://picsum.photos/seed/rank5/600/600",
    caption: "Aprendiendo algo nuevo cada día",
    likes: 543,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // hace 3 días
  },
  {
    id: 6,
    image_url: "https://picsum.photos/seed/rank6/600/600",
    caption: "El diseño está en los detalles",
    likes: 421,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // hace 4 días
  },
  {
    id: 7,
    image_url: "https://picsum.photos/seed/rank7/600/600",
    caption: "Arte digital, mi nueva pasión",
    likes: 389,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // hace 5 días
  },
  {
    id: 8,
    image_url: "https://picsum.photos/seed/rank8/600/600",
    caption: "La música es vida",
    likes: 256,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6), // hace 6 días
  },
  {
    id: 9,
    image_url: "https://picsum.photos/seed/rank9/600/600",
    caption: "Receta del día: pasta casera",
    likes: 128,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // hace 1 semana
  },
];
