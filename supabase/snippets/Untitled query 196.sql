-- ============================================
-- Modern Heritage (id_collection = 1) — mode / prêt-à-porter
-- ============================================
insert into public.product (name, rate, image, price, description, short, slug) values
('Blazer Wax Héritage', 5, 'https://loremflickr.com/600/600/african,blazer,fashion', 189.00, 'Blazer en tissu wax authentique, doublure satin, coupe cintrée moderne. Pièce signature de la collection, mêlant motifs traditionnels et tailoring contemporain.', 'Blazer en wax, coupe moderne', 'blazer-wax-heritage'),
('Robe Ankara Sculptée', 4, 'https://loremflickr.com/600/600/african,ankara,dress', 145.00, 'Robe midi en tissu Ankara, découpes architecturales et ceinture amovible. Confectionnée à la main par nos artisans partenaires.', 'Robe midi en Ankara', 'robe-ankara-sculptee'),
('Chemise Kente Épurée', 4, 'https://loremflickr.com/600/600/kente,shirt,fashion', 98.00, 'Chemise unisexe en coton mélangé motif Kente stylisé, col mao, coupe droite. Un basique réinventé pour le quotidien.', 'Chemise motif Kente', 'chemise-kente-epuree'),
('Pantalon Taille Haute Mud Cloth', 4, 'https://loremflickr.com/600/600/mudcloth,pants,fashion', 112.00, 'Pantalon large taille haute en toile imprimée mud cloth, poches profondes, tombé fluide. Confort et allure pour toutes les occasions.', 'Pantalon large mud cloth', 'pantalon-taille-haute-mud-cloth'),
('Veste Kimono Wax Croisée', 5, 'https://loremflickr.com/600/600/wax,kimono,jacket', 165.00, 'Veste kimono croisée en wax, ceinture assortie, manches larges. Pièce fluide qui accompagne toutes les silhouettes.', 'Veste kimono croisée en wax', 'veste-kimono-wax-croisee');

-- ============================================
-- Northern Artisans (id_collection = 2) — cuir, bijoux, artisanat
-- ============================================
insert into public.product (name, rate, image, price, description, short, slug) values
('Sac Besace Cuir Tanné', 5, 'https://loremflickr.com/600/600/leather,bag,handmade', 175.00, 'Sac besace en cuir pleine fleur tanné végétal, finitions cousues main, sangle ajustable. Chaque pièce porte les traces uniques du tannage traditionnel.', 'Besace en cuir tanné main', 'sac-besace-cuir-tanne'),
('Collier Perles et Laiton', 4, 'https://loremflickr.com/600/600/beaded,necklace,jewelry', 68.00, 'Collier composé de perles artisanales et de laiton martelé, fermoir ajustable. Inspiré des parures traditionnelles du Nord.', 'Collier perles et laiton martelé', 'collier-perles-laiton'),
('Bracelet Manchette Martelé', 4, 'https://loremflickr.com/600/600/brass,cuff,bracelet', 55.00, 'Manchette en laiton martelé à la main, motifs gravés géométriques. Pièce robuste au fini brut et authentique.', 'Manchette en laiton gravé', 'bracelet-manchette-martele'),
('Sandales Cuir Tressé', 4, 'https://loremflickr.com/600/600/leather,sandals,handmade', 89.00, 'Sandales en cuir tressé main, semelle en cuir naturel, confort sur mesure. Un savoir-faire transmis de génération en génération.', 'Sandales en cuir tressé', 'sandales-cuir-tresse'),
('Cuillère et Planche en Bois Sculpté', 5, 'https://loremflickr.com/600/600/carved,wood,craft', 42.00, 'Set cuillère et planche en bois massif sculpté à la main, motifs ancestraux gravés. Objets utilitaires devenus pièces décoratives.', 'Ustensiles en bois sculpté', 'cuillere-planche-bois-sculpte');

-- ============================================
-- Limited Editions (id_collection = 3) — pièces rares / collaborations
-- ============================================
insert into public.product (name, rate, image, price, description, short, slug) values
('Fauteuil Velours Sculptural', 5, 'https://loremflickr.com/600/600/velvet,armchair,design', 890.00, 'Fauteuil en velours vert émeraude, structure en bois massif sculpté à la main. Collaboration exclusive designer x artisan, édition limitée à 20 exemplaires.', 'Fauteuil design en édition limitée', 'fauteuil-velours-sculptural'),
('Masque Décoratif Contemporain', 5, 'https://loremflickr.com/600/600/african,mask,art', 320.00, 'Masque mural réinterprété par un artiste contemporain, bois sculpté et pigments naturels. Pièce unique numérotée et certifiée.', 'Masque mural pièce unique', 'masque-decoratif-contemporain'),
('Vase Céramique Édition Rare', 4, 'https://loremflickr.com/600/600/ceramic,vase,pottery', 210.00, 'Vase en céramique tournée main, émail réactif unique à chaque cuisson. Série limitée de 15 pièces signées par l''artisan.', 'Vase céramique série limitée', 'vase-ceramique-edition-rare'),
('Tapis Berbère Vintage Restauré', 5, 'https://loremflickr.com/600/600/berber,rug,vintage', 650.00, 'Tapis vintage authentique restauré, laine filée main, motifs originaux préservés. Pièce d''archive rare, une seule disponible.', 'Tapis vintage restauré, pièce unique', 'tapis-berbere-vintage-restaure'),
('Coffret Bijoux Collaboration Designer', 5, 'https://loremflickr.com/600/600/jewelry,gold,luxury', 480.00, 'Coffret de trois bijoux nés d''une collaboration entre designer contemporain et maître orfèvre. Édition strictement limitée, écrin inclus.', 'Coffret bijoux, collaboration exclusive', 'coffret-bijoux-collaboration-designer');

-- ============================================
-- Liaison collection_product
-- (associe chaque produit fraîchement inséré à sa collection, dans l'ordre de création)
-- ============================================
insert into public.collection_product (id_collection, id_product)
select 1, id from public.product where slug in (
  'blazer-wax-heritage', 'robe-ankara-sculptee', 'chemise-kente-epuree',
  'pantalon-taille-haute-mud-cloth', 'veste-kimono-wax-croisee'
);

insert into public.collection_product (id_collection, id_product)
select 2, id from public.product where slug in (
  'sac-besace-cuir-tanne', 'collier-perles-laiton', 'bracelet-manchette-martele',
  'sandales-cuir-tresse', 'cuillere-planche-bois-sculpte'
);

insert into public.collection_product (id_collection, id_product)
select 3, id from public.product where slug in (
  'fauteuil-velours-sculptural', 'masque-decoratif-contemporain', 'vase-ceramique-edition-rare',
  'tapis-berbere-vintage-restaure', 'coffret-bijoux-collaboration-designer'
);