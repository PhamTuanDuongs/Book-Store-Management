
-- User
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('anbv', '123', 'Bùi Văn An', '2001-01-01', 'anbv@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/5.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('duckm', '123', 'Khiếu Minh Đức', '2003-07-25', 'duckm@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/8.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('duongpt', '123', 'Phạm Tuấn Dương', '2002-01-01', 'duongpt@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/6.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('giangpt', '123', 'Phạm Trường Giang', '2003-06-18', 'giangpt@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/7.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('hoavt', '123', 'Vũ Tiến Hòa', '1999-01-01', 'hoavt@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/2.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('huyenntk', '123', 'Nguyễn Thị Khánh Huyền', '2003-08-06', 'huyenntk@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/10.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('khoahoc', '123', 'Em Yêu Khoa Học', '2022-01-01', 'khoahoc@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/2.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('maiphuonghoang', '123', 'Hoàng Mai Phương', '2003-01-29', 'maiphuonghoang@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/9.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('nhatvn', '123', 'Vũ Ngọc Nhất', '2003-01-01', 'nhatvn@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/4.jpg');
-- INSERT INTO User (username, password, displayName, dob, email, createDate, lastActive, avatarPath) VALUES ('phucvd', '123', 'Vũ Duy Phúc', '2003-01-01', 'phucvd@gmail.com', '2023-04-11', '2023-04-11 15:00:00', 'avatar/3.jpg');

-- Role
INSERT INTO `Role`(roleName)
VALUES ('Super Admin');
INSERT INTO `Role`(roleName)
VALUES ('Admin');
INSERT INTO `Role`(roleName)
VALUES ('User');

-- User_Role
INSERT INTO User_Role(username,roleId)
VALUES ('khoahoc',1);
INSERT INTO User_Role(username,roleId)
VALUES ('khoahoc',2);
INSERT INTO User_Role(username,roleId)
VALUES ('khoahoc',3);
INSERT INTO User_Role(username,roleId)
VALUES ('duckm',2);
INSERT INTO User_Role(username,roleId)
VALUES ('duckm',3);
INSERT INTO User_Role(username,roleId)
VALUES ('huyenntk',2);
INSERT INTO User_Role(username,roleId)
VALUES ('huyenntk',3);
INSERT INTO User_Role(username,roleId)
VALUES ('maiphuonghoang',2);
INSERT INTO User_Role(username,roleId)
VALUES ('maiphuonghoang',3);
INSERT INTO User_Role(username,roleId)
VALUES ('giangpt',2);
INSERT INTO User_Role(username,roleId)
VALUES ('giangpt',3);
INSERT INTO User_Role(username,roleId)
VALUES ('duongpt',3);
INSERT INTO User_Role(username,roleId)
VALUES ('anbv',3);
INSERT INTO User_Role(username,roleId)
VALUES ('nhatvn',3);
INSERT INTO User_Role(username,roleId)
VALUES ('phucvd',3);
INSERT INTO User_Role(username,roleId)
VALUES ('hoavt',3);

-- Feature
INSERT INTO Feature(featureName,url)
VALUES ('Home page','/homepage');
INSERT INTO Feature(featureName,url)
VALUES ('Account Information','/user');
INSERT INTO Feature(featureName,url)
VALUES ('Account Setting','/user/setting');
INSERT INTO Feature(featureName,url)
VALUES ('View Book','/book/view');
INSERT INTO Feature(featureName,url)
VALUES ('Add Booke','/book/add');
INSERT INTO Feature(featureName,url)
VALUES ('Admin Page','/admin');
INSERT INTO Feature(featureName,url)
VALUES ('Admin Book Management','/admin/book');
INSERT INTO Feature(featureName,url)
VALUES ('Admin User Management','/admin/user');
INSERT INTO Feature(featureName,url)
VALUES ('Super Admin page','/superadmin');

-- Role_Feature
INSERT INTO Role_Feature(roleId,featureId)
VALUES (3,1);
INSERT INTO Role_Feature(roleId,featureId)
VALUES (3,2);
INSERT INTO Role_Feature(roleId,featureId)
VALUES (3,3);
INSERT INTO Role_Feature(roleId,featureId)
VALUES (3,4);
INSERT INTO Role_Feature(roleId,featureId)
VALUES (3,5);
INSERT INTO Role_Feature(roleId,featureId)
VALUES (2,6);
INSERT INTO Role_Feature(roleId,featureId)
VALUES (2,7);
INSERT INTO Role_Feature(roleId,featureId)
VALUES (2,8);
INSERT INTO Role_Feature(roleId,featureId)
VALUES (1,9);


-- Book
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('1', 'Daisy Jones and The Six', 'Taylor Jenkins Reid', 'NOW A SMASH HIT AMAZON PRIME TV STARRING SAM CLAFLIN, RILEY KEOUGH AND CAMILA MORRONE', 'pdf/1.pdf', 'cover/1.jpg', ' 18.00 ', 'anbv');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('2', 'The Silent Patient', 'Alex Michaelides', 'The record-breaking, multimillion copy Sunday Times bestselling thriller and TikTok sensation', 'pdf/2.pdf', 'cover/2.jpg', ' 15.57 ', 'duckm');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('3', 'Me vs Brain', 'Hayley Morris', 'THE SUNDAY TIMES BESTSELLER. ORDER THE HILARIOUS BOOK FROM TIKTOK AND INSTA SENSATION HAYLEY MORRIS, NOW!', 'pdf/3.pdf', 'cover/3.jpg', ' 25.54 ', 'duongpt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('4', 'Soul Music : Discworld: The Death Collection', 'Terry Pratchett', 'Never has DEATH rocked so hard. Terry Pratchett\'s phenomenal laugh-out-loud Discworld series returns . . .', 'pdf/4.pdf', 'cover/4.jpg', ' 19.94 ', 'giangpt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('5', 'I\'m Glad My Mom Died', 'Jennette McCurdy', 'A heartbreaking and hilarious memoir by iCarly and Sam & Cat star Jennette McCurdy about her struggles as a former child actor-including eating disorders, addiction, and a complicated relationship with her overbearing mother-and how she retook control of her life.', 'pdf/5.pdf', 'cover/5.jpg', ' 27.48 ', 'anbv');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('6', 'Everything I Know About Love : Now a Major BBC One Series', 'Dolly Alderton', 'THE SUNDAY TIMES BESTSELLER & MAJOR BBC ONE TV SERIES', 'pdf/6.pdf', 'cover/6.jpg', ' 15.82 ', 'duckm');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('7', 'The Letters I Will Never Send : poems to read, to write and to share', 'Isabella Dorta', 'these letters thus far have remained unsent, i want you to change that for me.\' Embrace honesty and heal beautifully.', 'pdf/7.pdf', 'cover/7.jpg', ' 18.36 ', 'duongpt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('8', 'Conversations on Love', 'Natasha Lunn', 'This book might just change your life\' Sunday Times \'Wise, wonderful, moving and brilliant... will leave your heart in a much better place\' Stylist', 'pdf/8.pdf', 'cover/8.jpg', ' 15.15 ', 'giangpt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('9', 'The Hong Kong Diaries', 'Chris Patten', 'The diaries of the last British Governor of Hong Kong, published on the 25th anniversary of the handover', 'pdf/9.pdf', 'cover/9.jpg', ' 37.63 ', 'anbv');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('10', 'The Bell Jar', 'Sylvia Plath', 'Sylvia Plath is a major cultural icon who continues to inspire new generations of female readers. The Bell Jar is one of the defining novels of the 20th century.', 'pdf/10.pdf', 'cover/10.jpg', ' 13.52 ', 'duckm');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('11', 'Crooked Kingdom Collector\'s Edition', 'Leigh Bardugo', 'See the Grishaverse come to life on screen with Shadow and Bone, now a Netflix original series.', 'pdf/11.pdf', 'cover/11.jpg', ' 23.37 ', 'duongpt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('12', 'Six of Crows: Collector\'s Edition : Book 1', 'Leigh Bardugo', '*The Grishaverse will be coming to Netflix soon with Shadow and Bone, an original series!*', 'pdf/12.pdf', 'cover/12.jpg', ' 23.62 ', 'giangpt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('13', 'Once Upon A Broken Heart', 'Stephanie Garber', 'Make a wish . . . \'An unputdownable fairy tale\' Kerri Maniscalco, New York Times bestselling author of Kingdom of the Wicked', 'pdf/13.pdf', 'cover/13.jpg', ' 17.70 ', 'anbv');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('14', 'Before the Coffee Gets Cold', 'Toshikazu Kawaguchi', 'Translated from Japanese by Geoffrey Trousselot, Toshikazu Kawaguchi’s beautiful, moving Before the coffee gets cold explores the age-old question: what would you do if you could travel back in time? More importantly, who would you want to meet, maybe for one last time?', 'pdf/14.pdf', 'cover/14.jpg', ' 13.31 ', 'duckm');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('15', 'If We Were Villains: The Sensational TikTok Book Club pick', 'M. L. Rio', 'A vivid and immersive story of obsession perfect for fans of dark academia and Donna Tartt\'s The Secret History', 'pdf/15.pdf', 'cover/15.jpg', ' 17.82 ', 'duongpt');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('16', 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 'A delight for a public which enjoys incident, mystery, and above all that matching of the wits of a clever man against the dumb resistance of the secrecy of inanimate things, which results in the triumph of the human intelligence.', '17.48', 'pdf/16.pdf', 'cover/16.jpg', 'anbv', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('17', 'Pride and Prejudice', 'Jane Austen', 'Austen\'s finest comedy of manners portrays life in the genteel rural society of the early 1800s, and tells of the initial misunderstandings (and mutual enlightenment) between lively and quick witted Elizabeth Bennet and the haughty Mr. Darcy', '11.04', 'pdf/17.pdf', 'cover/17.jpg', 'duckm', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('18', 'Emma', 'Jane Austen', 'The main character, Emma Woodhouse, is described in the opening paragraph as \'\'handsome, clever, and rich\'\' but is also rather spoiled. As a result of the recent marriage of her former governess, Emma prides herself on her ability to matchmake, and proceeds to take under her wing an illegitimate orphan, Harriet Smith, whom she hopes to marry off to the vicar, Mr Elton. So confident is she that she persuades Harriet to reject a proposal from a young farmer who is a much more suitable partner for the girl.', '23.84', 'pdf/18.pdf', 'cover/18.jpg', 'duongpt', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('19', 'The Grammar of English Grammars', 'Goold Brown', 'With an introduction historical and critical; the whole methodically arranged and amply illustrated; with forms of correcting and of parsing, improprieties for correction, examples for parsing, questions for examination, exercises for writing, observations for the advanced student, decisions and proofs for the settlement of disputed points, occasional strictures and defences, an exhibition of the several methods of analysis, and a key to the oral exercises: to which are added four appendixes, pertaining separately to the four parts of grammar.', '26.19', 'pdf/19.pdf', 'cover/19.jpg', 'giangpt', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('20', '20,000 Leagues Under the Sea', 'Jules Verne', 'Sent to investigate mysterious encounters that are disrupting international shipping, Professor Aronnax, his servant Conseil, and disgruntled harpooner Ned Land are captured when their frigate is sunk during an encounter with the "monster." The submarine Nautilus and its eccentric Captain Nemo afford the professor and his companions endless fascination and danger as they\'re swept along on a yearlong undersea voyage.', '24.49', 'pdf/20.pdf', 'cover/20.jpg', 'anbv', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('21', 'The Woman in White', 'Wilkie Collins', 'The Woman in White is widely regarded as the first in the genre of \'sensation novels\'. It follows the story of two sisters living in Victorian England with their selfish, uninterested uncle as their guardian. Marian Halcombe is the elder of the two sisters, and a remarkably ugly woman, but with courage, strength and resourcefulness in abundance. The younger, her beautiful half-sister Laura Fairlie, is engaged to a rich man by the name of Sir Percival Glyde.', '48.76', 'pdf/21.pdf', 'cover/21.jpg', 'duckm', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('22', 'The Phantom of the Opera', 'Gaston Leroux', 'The story of a man named Erik, an eccentric, physically deformed genius who terrorizes the Opera Garnier in Paris. He builds his home beneath it and takes the love of his life, a beautiful soprano, under his wing.', '15.18', 'pdf/22.pdf', 'cover/22.jpg', 'duongpt', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('23', 'The After House', 'Mary Roberts Rinehart', '"An astonishing story of love and mystery, which equals if not surpasses in interest those other lively stories of Mrs. Rinehart\'s. The novel is one of the sprightliest of the season and will add to the author\'s reputation as an inventor of \'queer\' plots." — Philadelphia Record.', '24.03', 'pdf/23.pdf', 'cover/23.jpg', 'giangpt', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('24', 'The Most Dangerous Game', 'Richard Connell', 'A big-game hunter from New York is shipwrecked on an isolated island in the Caribbean, and is hunted by a Russian aristocrat.The story is an inversion of the big-game hunting safaris in Africa and South America that were fashionable among wealthy Americans in the 1920s.', '27.26', 'pdf/24.pdf', 'cover/24.jpg', 'anbv', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('25', 'The Attic Murder', 'S. Fowler Wright', 'age to the door of her private retreat, and was about to knock when he was deterred by the words which he could clearly hear.', '20.87', 'pdf/25.pdf', 'cover/25.jpg', 'duckm', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('26', 'The Demon Girl', 'Penelope Fletcher', 'Rae Wilder has problems. Plunged into a world of dark magic, fierce creatures and ritual sacrifice, she is charged with a guarding a magical amulet. Rae finds herself beaten up, repeatedly, and forced to make a choice: to live and die human, or embrace her birth-right and wield magics that could turn her into something wicked, a force of nature nothing can control.', '50.4', 'pdf/26.pdf', 'cover/26.jpg', 'duongpt', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('27', 'Advice to Young Musicians', 'Robert Schumann', 'The cultivation of the Ear is of the greatest importance.--Endeavour early to distinguish each several tone and key. Find out the exact notes sounded by the bell, the glass, the cuckoo, etc.', '40.11', 'pdf/27.pdf', 'cover/27.jpg', 'giangpt', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('28', 'How to Sing', 'Lilli Lehmann', 'ited repertory when she was indisposed. She never attended rehearsals, but came to the theatre in the evening and sang triumphantly, without ever having seen the persons who sang and acted with her. She spared herself rehearsals which, on the day of the performance, or the day before, exhaust all singers, because of the excitement of all kinds attending them, and which contribute neither to the freshness of the voice nor to the joy of the profession.', '25.59', 'pdf/28.pdf', 'cover/28.jpg', 'anbv', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('29', 'Salads, Sandwiches and Chafing-Dish Dainties', 'Janet McKenzie Hill', 'ned, as, by the pickling process, liquid will drain out into the bottom of the vessel and, mixing with the mayonnaise, will liquefy the same.', '23.61', 'pdf/29.pdf', 'cover/29.jpg', 'duckm', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, price, pdfPath, coverPath, createdBy, noSale, noView) VALUES ('30', 'Chocolate and Cocoa Recipes', 'Janet McKenzie Hill', 'For six cupfuls of cocoa use two tablespoonfuls of the powder, two tablespoonfuls of sugar, half a pint of boiling water, and a pint and a half of milk. Put the milk on the stove in the double-boiler. Put the cocoa and sugar in a saucepan, and gradually pour the hot water upon them, stirring all the time. Place the saucepan on the fire and stir until the contents boil. Let this mixture boil for five minutes; then add the boiling milk and serve', '31.1', 'pdf/30.pdf', 'cover/30.jpg', 'duongpt', '0', '0');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('31', 'Things Mother Used to Make', 'Lydia Maria Gurney', 'A Collection of Old Time Recipes, Some Nearly One Hundred Years Old and Never Published Before', 'pdf/31.pdf', 'cover/31.jpg', ' 18.00 ', 'hoavt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('32', 'Cassell\'s Vegetarian Cookery', 'A. G. Payne', 'A Manual of Cheap and Wholesome Diet', 'pdf/32.pdf', 'cover/32.jpg', ' 15.57 ', 'huyenntk');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('33', 'Candy-Making Revolutionized', 'Mary Elizabeth Hall', 'If he consumes a quantity of impure confectionery, his digestion will be ruined for life; how much of the confectionery bought is rankly impure it is well for the mother\'s peace of mind that she does not know! On the other hand, if the child is not given sweets, he is deprived of a food element of the greatest value to his development. And for the adult, the value of pure candy is too obvious to warrant comment.', 'pdf/33.pdf', 'cover/33.jpg', ' 25.54 ', 'khoahoc');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('34', 'Food for the Traveler', 'Dora Cathrine Cristine Liebel Roper', 'What to Eat and Why', 'pdf/34.pdf', 'cover/34.jpg', ' 19.94 ', 'maiphuonghoang');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('35', 'The Story of Crisco', 'Marion Harris Neil', '250 Tested Recipes', 'pdf/35.pdf', 'cover/35.jpg', ' 27.48 ', 'nhatvn');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('36', 'Alice in Wonderland', 'Lewis Carroll', 'The story of a girl named Alice who falls down a rabbit hole into a fantasy world populated by peculiar and anthropomorphic creatures. The tale is filled with allusions to Dodgson\'s friends. The tale plays with logic in ways that have given the story lasting popularity with adults as well as children. It is considered to be one of the most characteristic examples of the genre of literary nonsense, and its narrative course and structure have been enormously influential, especially in the fantasy genre', 'pdf/36.pdf', 'cover/36.jpg', ' 15.82 ', 'phucvd');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('37', 'The Wonderful Wizard of Oz', 'Lyman Frank Baum', 'To quote a reader, \'\'If all you know of Oz comes from the movie musical then you owe it to yourself to read the book that inspired Hollywood.\'\' Learn about Dorothy and her friends in the first of thirteen volumes by L. Frank Baum', 'pdf/37.pdf', 'cover/37.jpg', ' 18.36 ', 'hoavt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('38', 'Peter Pan', 'J. M. Barrie', 'This edition of Peter Pan has been created in the United States of America from a comparison of various editions determined by age to be in the Public Domain in the United States. There are questions concerning the copyright status in other countries, particulary in members or former members of the British Commonwealth. Anyone who can contribute information as to the copyrights status of earliest editions is encouraged to do so. For the present, this edition of Peter Pan is restricted to the United States, and is not to be for use or included in any storage or retrieval system in any country, other than the United States of America. To assist in the preservation of this edition in proper usage, our edition is claimed as copyright (c)1991 due to our preparations of several sources, our own research, and the inclusions of additions and explanations to the original sources.', 'pdf/38.pdf', 'cover/38.jpg', ' 15.15 ', 'huyenntk');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('39', 'Adventures of Pinocchio', 'Carlo Collodi', 'The Adventures of Pinocchio is a story about an animated puppet, boys who turn into donkeys, and other fairy tale devices. The setting of the story is the Tuscan area of Italy. It was a unique literary marriage of genres for its time', 'pdf/39.pdf', 'cover/39.jpg', ' 37.63 ', 'khoahoc');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('40', 'A Little Princess', 'Frances Hodgson Burnett', 'Sara Crewe, a pupil at Miss Minchin\'s London school, is left in poverty when her father dies, but is later rescued by a mysterious benefactor.', 'pdf/40.pdf', 'cover/40.jpg', ' 13.52 ', 'maiphuonghoang');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('41', 'The Art of War', 'Zi Sun', 'CHUAN, adding that there were two other CHUAN besides. This has brought forth a theory, that the bulk of these 82 chapters consisted of other writings of Sun Tzu -- we should call them apocryphal -- similar to the WEN TA, of which a specimen dealing with the Nine Situations [15] is preserved in the T`UNG TIEN, and another in Ho Shin\'s commentary', 'pdf/41.pdf', 'cover/41.jpg', ' 23.37 ', 'nhatvn');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('42', 'The Count of Monte Cristo', 'Alexandre Dumas', 'A classic adventure novel, often considered Dumas\' best work, and frequently included on lists of the best novels of all time. Completed in 1844, and released as an 18-part series over the next two years, Dumas collaborated with other authors throughout. The story takes place in France, Italy, and the Mediterranean from the end of the rule of Napoleon I through the reign of Louis-Philippe.', 'pdf/42.pdf', 'cover/42.jpg', ' 23.62 ', 'phucvd');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('43', 'A Tale of Two Cities', 'Charles Dickens', 'Sidney Carton is almost the only case in which Dickens has drawn a hero on the true heroic scale, and his famous act of self-sacrifice is unmatched in fiction. The book must be ranked very high among the great tragedies in literature.', 'pdf/43.pdf', 'cover/43.jpg', ' 17.70 ', 'hoavt');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('44', 'Ten Days in a Mad-House', 'Nellie Bly', 'Since my experiences in Blackwell\'s Island Insane Asylum were published in the World I have received hundreds of letters in regard to it. The edition containing my story long since ran out, and I have been prevailed upon to allow it to be published in book form, to satisfy the hundreds who are yet asking for copies.I am happy to be able to state as a result of my visit to the asylum and the exposures consequent thereon, that the City of New York has appropriated $1,000,000 more per annum than ever before for the care of the insane. So I have at least the satisfaction of knowing that the poor unfortunates will be the better cared for because of my work.', 'pdf/44.pdf', 'cover/44.jpg', ' 13.31 ', 'huyenntk');
INSERT INTO Book (bookId, title, authorName, description, pdfPath, coverPath, price, createdBy) VALUES ('45', 'A History of China', 'Wolfram Eberhard', 'have also been concerned not to leave out of account China\'s relations with her neighbours. Now that we have a better knowledge of China\'s neighbours, the Turks, Mongols, Tibetans, Tunguses, Tai, not confined to the narratives of Chinese, who always speak only of "barbarians", we are better able to realize how closely China has been associated with her neighbours from the first day of her history to the present time', 'pdf/45.pdf', 'cover/45.jpg', ' 17.82 ', 'khoahoc');

-- Category
select * from Category;
insert into Category (categoryId, categoryName) 
values (1, 'Art & Photography'),
	   (2, 'Biography'),
	   (3, 'Children\'s Books'),
	   (4, 'Crafts & Hobbies'),
	   (5, 'Crime & Thriller'),
	   (6, 'Fiction'),
	   (7, 'Food & Drink'),
	   (8, 'Graphic Novels, Anime & Manga'),
	   (9, 'History & Archaeology');
 
-- Book_Category
INSERT INTO Book_Category (categoryId, bookId) VALUES ('1', '1');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('1', '2');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('1', '3');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('1', '4');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('1', '5');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('2', '6');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('2', '7');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('2', '8');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('2', '9');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('2', '10');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('3', '11');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('3', '12');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('3', '13');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('3', '14');
INSERT INTO Book_Category (categoryId, bookId) VALUES ('3', '15');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('16', '4');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('17', '4');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('18', '4');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('19', '4');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('20', '4');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('21', '5');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('22', '5');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('23', '5');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('24', '5');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('25', '5');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('26', '6');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('27', '6');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('28', '6');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('29', '6');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('30', '6');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('31', '7');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('32', '7');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('33', '7');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('34', '7');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('35', '7');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('36', '8');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('37', '8');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('38', '8');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('39', '8');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('40', '8');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('41', '9');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('42', '9');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('43', '9');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('44', '9');
INSERT INTO Book_Category (bookId, categoryId) VALUES ('45', '9');

