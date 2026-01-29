// ===== TỔNG QUAN =====
// Main Logic: Video nền, Navigation, UI Update, Story Logic

// ===== DATA INITIALIZATION EXTENSION =====
function initializeAppSpecificData() {
    // Khởi tạo stories với truyện ngẫu nhiên ngắn
    if (!localStorage.getItem('tutien_stories')) {
        const sampleStories = [
            {
                id: 1,
                title: 'Vạn Cổ Chí Tôn',
                author: 'Cửu U Chân Nhân',
                genre: 'tien-hiep',
                synopsis: 'Linh khí khô kiệt, thánh nhân không xuất. Một thiếu niên từ nơi hoang vu đi ra, nghịch thiên hành đạo, trở thành vạn cổ chí tôn...',
                content: `Chương 1: Trong khoảng thời gian này, tinh thần của Lý Vân Tiêu vẫn hoảng hốt, trong đầu thỉnh thoảng dần hiện ra các loại hình ảnh, thật giống như mình đã biến thành một người khác. Còn thỉnh thoảng xuất hiện chứng động kinh, la to, khóc lớn, cười ầm lên…

Càng kỳ lạ chính là, trong đầu không ngừng vang lên một thanh âm, tựa hồ đang ghi nhớ một đoạn kinh văn kỳ dị. Có lúc hắn cẩn thận lắng nghe, thật giống như là một phần tâm pháp, thân thể của hắn sẽ không tự chủ đong đưa lên. Càng muốn nổi điên hơn là, đoạn ngắn ký ức trong óc càng ngày càng nhiều, càng ngày càng dài.

Rốt cục có một ngày, hắn bị dằn vặt tới hôn mê, thời điểm tỉnh lại lần nữa, hết thảy đoạn ngắn ký ức toàn bộ hoàn chỉnh nối liền cùng nhau, hiện lên ở trong đầu. Trong đôi mắt Lý Vân Tiêu một mảnh trong suốt, phảng phất ngôi sao sáng, hắn rốt cục tỉnh rồi.

– Không nghĩ tới ta được sống lại?

Trong tròng mắt Lý Vân Tiêu bắn mạnh ra một điểm tinh mang, hơi quay đầu nhìn pho tượng cao vút trong mây ngoài cửa sổ.

– Lịch Thiên Vũ năm 1033, Cổ Phi Dương ta đã ch.ết mười lăm năm rồi sao?

Mười lăm năm trước, Thiên Vũ giới một trong thập đại phong hào Vũ Đế, Phá Quân Vũ Đế… Cổ Phi Dương, tại sơn mạch Thiên Đãng bất ngờ ngã xuống, chấn động toàn bộ đại lục! Sau đó các thế lực lớn sóng ngầm phun trào, các loại xung đột càng ngày càng kịch liệt, đại lục Thiên Vũ vắng lặng mấy trăm năm, lần thứ hai gió nổi mây vần.

– Hắc.

Lý Vân Tiêu nhếch miệng nở nụ cười, nhẹ giọng thở dài nói:

– Không nghĩ tới đã sống lại sớm hơn mười lăm năm. Cổ Phi Dương ta rốt cục trở về.

Đột nhiên một tiếng quát mắng lạnh lùng truyền đến.

– Lý Vân Tiêu!

Xèo!

Một âm thanh bén nhọn như muốn cắt không khí ra làm đôi từ đâu vang lên, Lý Vân Tiêu ngẩng đầu lên, nhìn thấy một đoạn phấn viết phá không mà đến, sắp tới sát mặt mình rồi.

Hắn dùng hai ngón tay hững hờ khép lại, đem phấn viết đặt ở trên bàn. Dùng ánh mắt bình tĩnh nhìn chủ nhiệm lớp Lạc Vân Thường sắc mặt dần lạnh ở trên bục giảng.

Lý Vân Tiêu đi học thất thường, đâyy đã không phải lần thứ n+n, nếu không thất thần ngược lại sẽ làm nàng kỳ quái. Nhưng ngày hôm nay tâm tình của Lạc Vân Thường hiển nhiên rất xấu, vì lẽ đó cần một kẻ xui xẻo để nàng phát tiết bức xúc trong lòng.

Mà Lý Vân Tiêu vốn được công nhận là rác rưởi, không thể nghi ngờ là người được chọn tốt nhất. Từ xưa tới nay, hết thảy lão sư tâm tình không tốt đều yêu thích chọn hắn, điều này tựa hồ thành một thói quen. Phàm là có lão sư tâm tình khó chịu, mọi người liền biết Lý Vân Tiêu sẽ xui xẻo rồi.

Tất cả mọi người đều hưng phấn, bắt đầu cười trộm cùng cười trên đau khổ của người khác, từng cái từng cái khuôn mặt đầy mong đợi chờ xem kịch vui, càng có mấy học sinh trực tiếp ồn ào lên.

Lý Vân Tiêu híp mắt nhìn Lạc Vân Thường trên bục giảng, thầm nghĩ:

– Cô nàng này vóc người thật tốt, tóc dài da trắng, nếu lại phối hợp áo choàng ngắn màu đỏ, ngân giác chiến ngoa, áo choàng Thiên Lam, lại nắm ngân thương, vậy thì sẽ biến thành một Hồng Liên Vũ Đế khác. Khà khà, rất có tiềm chất mặc đồ đồng phục nha, không biết Hồng Liên biết được có thể chém ch.ết ta hay không.

Trong lòng Lạc Vân Thường đột nhiên chấn động, trong mắt Lý Vân Tiêu tựa hồ lướt qua một tia mỉm cười, làm cho cả người nàng không nhịn được run rẩy một hồi. Thật giống như một con thỏ trắng dịu ngoan, đột nhiên bị mãnh hổ tập trung vậy, cảm giác vô lực trong nháy mắt làm cho nàng như rơi vào hầm băng.

– Vừa nãy xảy ra chuyện gì? Ánh mắt tiểu tử này… Vừa nãy thật giống như hắn đang cười? Tuyệt đối không thể! Ta là Đại vũ sư cảnh giới Tứ Tượng, làm sao có khả năng bị một tiểu tử phổ thông nhìn đến tâm thần thất thủ, nhất định là gần đây bị vây ở trên sự kiện kia, tâm thần có chút bất định.

Vẻ mặt ngơ ngác trong mắt nàng lóe lên một cái rồi biến mất, sau khi tâm thần thất thố trong nháy mắt, rất nhanh liền khôi phục lại, hai mắt chìm xuống, khóe miệng lướt qua một nụ cười lạnh lùng.

– Lý Vân Tiêu, vừa nãy chúng ta nói luyện chế Huyền Binh, ta hỏi ngươi, Huyền Binh phổ thông tổng cộng có bao nhiêu loại thủ pháp luyện chế?

Lạc Vân Thường đang dạy chính là thuật luyện cơ sở, tuy cực ít người có thể trở thành Thuật luyện sư, nhưng kiến thức thuật luyện cơ bản nhất là mỗi một võ giả đều phải hiểu rõ.

– Luyện chế huyền Binh? Ha ha, lão tử là Đế cấp Thuật luyện sư cấp chín đại lục Thiên Vũ, ngoại trừ mấy lão bất tử kia ra, cõi đời này ai dám ở trước mặt ta nói thuật luyện chi đạo!

Lý Vân Tiêu hờ hững xa xôi nói:

– Cách luyện chế Huyền Binh phổ thông tổng cộng có bốn mươi tám loại.

– Bốn mươi tám loại? Trong phòng học đột nhiên yên tĩnh, lập tức bùng nổ ra tiếng cười to!

– Ha ha, tiểu tử này quả nhiên đang mộng du.

– Ta đã nói rồi, nhìn hắn dáng vẻ bình tĩnh, ta còn tưởng rằng hắn biết chứ!

– Cắt, nếu như hắn biết cái này, ta đã sớm lên làm Trấn quốc thiết vệ!

Lý Vân Tiêu hơi nhướng mày, ánh mắt nhất thời rơi vào trên sách giáo khoa trước người, hắn dùng tay xoay một cái, nhất thời nhìn thấy một câu nói.

– Cách luyện chế Huyền Binh phổ thông, tổng cộng ba mươi sáu loại. Chia ra làm…

Hắn lại đem sách giáo khoa khép lại, chỉ thấy phía trên có mấy đại tự “Thuật luyện cơ sở”, ở dưới đại tự, rõ ràng thác ấn một hàng chữ nhỏ: “Dương Địch”.

– Tiểu tử Dương Địch kia, ta không phải đã nói với hắn thủ pháp phổ thông có bốn mươi tám loại sao? Hắn lại nghe vào tai này ra tai kia sao, sau này không cần tiếp tục tới nghe ta giảng bài.

Trong nháy mắt hắn liền phán tử hình cho tác giả quyển sách này, nếu Dương Địch biết mà nói, sợ sẽ trực tiếp khóc ch.ết a.

Lý Vân Tiêu đối với các loại trào phúng làm như không thấy, từ tốn nói:

– Thủ pháp luyện chế chính thống có ba mươi sáu loại, thế nhưng ở sáu mươi năm trước, Cổ Phi Dương một mình sáng tác mười hai loại cách luyện chế, đã được Công Hội Thuật Luyện Sư tán thành, đặt ngang hàng với cách luyện chế trụ cột. Vì lẽ đó hẳn là bốn mươi tám loại.

– Dừng, tiểu tử ngươi nói nhăng gì đó, lẽ nào hắn so với Dương Địch đại nhân hiểu được còn nhiều?

– Ha ha, tiểu tử này sợ bị trách phạt, vì lẽ đó bắt đầu ăn nói linh tinh.

– Phải a, Dương Địch đại nhân thân là học sinh của Vũ Đế Cổ Phi Dương, lẽ nào còn không biết cơ sở luyện chế có mấy loại sao?

Các loại giễu cợt càng là nổi lên bốn phía, đột nhiên một tiếng gào to chấn động đến tất cả mọi người đều ngậm miệng lại.

– Tất cả im miệng cho ta! Hắn nói đúng!

Thấy hay thì nhấn chia sẻ nha, cám ơn..`,
                chapters: 3,
                likes: 50000,
                views: 1200000,
                bookmarks: 25000,
                date: '2023-03-15',
                status: 'ongoing'
            },
            {
                id: 2,
                title: 'Nghịch Thiên Thần Đế',
                author: 'Thần Võ Tôn Giả',
                genre: 'tien-hiep',
                synopsis: 'Thần đế chuyển thế, tái sinh thành phế vật thiếu gia. Nắm trong tay vô thượng thần công, bắt đầu con đường nghịch thiên phản thần...',
                content: `Chương 1:Offline mừng sinh nhật Tàng Thư Viện lần thứ 7 ở Vân Triệt ý thức dần dần thức tỉnh.

Sao thế này...... Chẳng lẽ ta còn không có chết? Ta rõ ràng rơi xuống Tuyệt Vân nhai, như thế nào có thể còn sống ! hơn nữa trên người cư nhiên không có cảm giác đau đớn...... Liên cảm giác khó chịu đều không có? Đây là có chuyện gì?


Vân Triệt lập tức mở mắt, nhanh chóng đứng dậy ngồi dậy, rõ ràng phát hiện, chính mình lại tại nhất trương mềm mại trên giường lớn, giường phía trên buông xuống đại hồng sắc mạn liêm, nhuộm đẫm một loại vui vẻ không khí.


“A ! Tiểu Triệt ! ngươi...... Ngươi tỉnh !”


Một kinh hỉ thiếu nữ thanh âm từ hắn bên tai truyền đến, tùy theo, một nữ hài tiễu nhan xuất hiện ở hắn tầm mắt bên trong.


Đây là một nhìn qua chỉ có mười lăm mười sáu tuổi nữ hài, một thân màu xanh biếc váy dài, nộn nhan tuyết nhuận xinh đẹp, hồng nhuận cặp môi thơm tiên diễm ướt át, thanh tú mũi ngọc kiều kiều, một đôi lộ ra thâm thâm kinh hỉ mắt đẹp liền như một cái đầm trong suốt nước suối, thanh triệt trong suốt, sở sở động nhân. Cả khuôn mặt dịu dàng ôn nhu, minh diễm chiếu nhân. Còn tuổi nhỏ liền có như thế phong tư, lớn lên sau có thể nghĩ sẽ là như thế nào khuynh thành diễm sắc.


Nhìn này gần trong gang tấc nữ hài, Vân Triệt ngắn ngủi mộng một chút, ba chữ hoàn toàn là theo bản năng thốt ra:“Tiểu cô?”


Nữ hài tuyết trắng cổ tay trắng bóc nâng lên, Ôn Ngọc tiểu thủ đặt tại Vân Triệt trên trán, thần sắc của nàng cũng càng thêm thả lỏng một ít, vui vẻ nói:“Nhiệt độ cơ thể cũng kém không nhiều khôi phục bình thường , quá tốt, vừa rồi thiếu chút nữa muốn bị hù chết . Tiểu Triệt, ngươi trên người hiện tại có hay không nơi nào không thoải mái?”


Đối mặt thiếu nữ tràn đầy thâm thâm thân thiết mâu quang, Vân Triệt có chút ngây ngốc lắc đầu...... Tinh thần hoàn toàn ở tự do trạng thái.


“Ngươi trước hảo nghỉ ngơi trong chốc lát, ta lập tức đi nói cho ngươi gia gia. Hôm nay nhưng là ngươi đại hỉ ngày, ngươi bỗng nhiên té xỉu, ngươi gia gia thiếu chút nữa không cấp điên rồi, vừa rồi tự mình đi ra cửa thỉnh Tư Đồ Đại Sư .”


Thiếu nữ vội vàng dưới, không có phát hiện Vân Triệt biểu tình trung khác thường, nàng ấn Vân Triệt bả vai khiến hắn nằm về trên giường, sau đó cước bộ vội vàng rời đi.


Cửa bị đóng lại, Vân Triệt cũng lại lần nữa từ trên giường ngồi dậy, hai tay một chút ôm lấy chính mình đầu.


Nơi này là Thiên Huyền đại lục thất quốc chi nhất Thương Phong đế quốc tối Đông Phương Tiểu Thành -- Lưu Vân thành, mà hắn, là Lưu Vân thành Tiêu môn ngũ trưởng lão duy nhất tôn tử -- Tiêu Triệt ! năm nay vừa mãn mười sáu tuổi.


Đây là hắn hiện tại thân phận.


Hắn ký ức, cùng tại Thương Vân đại lục kia hơn hai mươi năm ký ức nhất thời trùng điệp cùng một chỗ, khiến hắn một trận giật mình.


Ta là Tiêu Triệt...... Kia Thương Vân đại lục ký ức lại là sao thế này?


Chẳng lẽ là tại Thương Vân đại lục chết đi, xuyên việt đến trên khối thân thể này?


Không đúng ! chính mình rõ ràng chính là Tiêu Triệt ! phòng này hết thảy chính mình đều vô cùng quen thuộc, từ nhỏ đến lớn, sở hữu ký ức rành mạch, sở hữu hết thảy đều là chính mình tự mình trải qua, tuyệt đối sẽ không là đánh cắp người khác ký ức !


Chẳng lẽ Thương Vân đại lục hết thảy, chỉ là một giấc mộng? Tại chính mình rơi xuống Tuyệt Vân nhai sau, mộng bỗng nhiên tỉnh?


Nhưng Thương Vân đại lục ký ức đồng dạng rõ ràng vô cùng...... Kia hai mươi bốn năm ân oán tình cừu, như thế nào có thể là mộng !


Này đến cùng là sao thế này?


Vân Triệt...... Hiện tại hẳn là Tiêu Triệt, hắn giật mình sau một lúc lâu, ánh mắt rốt cuộc chậm rãi bình tĩnh xuống dưới, suy nghĩ cũng chậm rãi rõ ràng.


Lúc này chính trực sáng sớm thời gian, bên ngoài thiên không còn chưa đại lượng. Hôm nay, là hắn cùng Hạ Khuynh Nguyệt đại hôn ngày, hai khắc chung trước, hắn liền bị tiểu cô đánh thức, thay một thân đại hồng hỉ y, sau đó uống một chén tiểu cô tự tay ngao chúc, sau đó, hắn liền cảm giác toàn thân vô lực...... Sau đó liền cái gì cũng không biết .


Cho tới bây giờ mới tỉnh lại.


Lúc này, một mạt khác thường hương vị từ bên môi hắn truyền đến, Tiêu Triệt đem môi hơi hơi nhất mân, nhất thời sắc mặt khẽ biến.


Đây là...... Thí Tâm tán ! !


Tại Thương Vân đại lục kia vài năm, có Thiên Độc châu trong người Vân Triệt đối thiên hạ Vạn Độc rõ như lòng bàn tay, có thể nói trên đời không có hắn không biết độc, vô luận là cái gì độc, hắn chỉ cần nhẹ nhàng ngửi, liền có thể nháy mắt thức phân biệt loại này độc danh tự cùng cấu thành. Đồng thời, có được Thiên Độc châu hắn bách độc bất xâm, lại lợi hại độc, cũng không khả năng thương tổn hắn.


Thí Tâm tán, là lấy Tuyệt Hồn thảo cùng Tử Văn Hải Đường sở chế thành, dung nhập trong nước sau vô sắc vô vị, nhập thể sau hơn mười giây thời gian liền khả đoạt nhân sinh cơ, trực tiếp bị mất mạng, trên thi thể thậm chí sẽ không hiện ra bất cứ trúng độc dấu vết.


Tiêu Triệt ánh mắt nhất âm, nháy mắt hiểu ra.


Nguyên lai, hắn không phải mới vừa hôn mê, hơn nữa sở uống chúc trung bị hạ Thí Tâm tán, sau đó bị độc chết ! chết đi luân hồi chuyển thế, sinh tại Thương Vân đại lục, tại Thương Vân đại lục rơi xuống Tuyệt Vân nhai sau...... Cư nhiên lại trùng sinh về ở kiếp trước vừa chết đi trên thân thể !


Tuy rằng loại sự tình này nghe đi lên hoàn toàn chính là thiên phương dạ đàm, nhưng đây là Tiêu Triệt duy nhất có thể nghĩ đến khả năng !


Đợi đã (vân vân)...... Nếu là lời như vậy, chính mình hiện tại thân thể căn bản không có kháng độc năng lực, vì cái gì vừa tiếp xúc bên môi Thí Tâm tán, hiện tại lại là bình yên vô sự?


Một mạt đôi chút khác thường cảm từ hắn tay trái trong lòng bàn tay truyền đến, Tiêu Triệt nâng lên chính mình tay trái, rõ ràng phát hiện, lòng bàn tay bộ vị, thế nhưng ấn một quả lục sắc hình tròn ấn ký.


Này ấn ký hình dạng, nhan sắc, lớn nhỏ...... Rõ ràng là Thiên Độc châu giống nhau như đúc !


Tại rơi xuống Tuyệt Vân nhai tiền, tuyệt cảnh trung hắn trực tiếp đem Thiên Độc châu cấp nuốt đến trong bụng, hắn hoàn toàn không biết làm như vậy sẽ dẫn phát cái gì hậu quả. Mà lúc này, này trên tay ấn ký, dường như là Thiên Độc châu cũng cùng hắn cùng nhau xuyên việt lại đây !


“Thiên Độc châu......” Ngẩn người nhìn này mai rất giống Thiên Độc châu ấn ký, Tiêu Triệt theo bản năng mặc niệm một tiếng.


Theo hắn thanh âm hạ xuống, trong lòng bàn tay lục sắc ấn ký bỗng nhiên phóng ra một đoàn bích lục quang mang, trước mắt hắn nhất thời không ngọn nguồn nhất hoảng, đại não một trận đôi chút mê muội, khiến hắn theo bản năng nhắm hai mắt lại, tại hắn mở to mắt khi, hắn chung quanh thế giới, đã biến thành mờ mịt lục sắc.


Này lục sắc thế giới trống trải một mảnh, nhìn không tới giới hạn, chung quanh tràn đầy độc chúc Thiên Độc châu mỏng manh khí tức, Tiêu Triệt ngưng một hồi lâu nhi mới rốt cuộc minh bạch, chính mình tinh thần thế nhưng tiến vào Thiên Độc châu bên trong thế giới.


Nguyên lai Thiên Độc châu bên trong, cư nhiên còn có như vậy rộng lớn thế giới ! càng không thể tin tưởng là, chính mình bất kể hậu quả nuốt vào Thiên Độc châu, cư nhiên khiến Thiên Độc châu theo chính mình xuyên việt, còn tựa hồ trở thành chính mình thân thể một bộ phận !


Nếu có thể đi vào đến, kia tất nhiên cũng có thể đi ra ngoài.


Tiêu Triệt nhắm mắt lại, ý niệm khẽ nhúc nhích, nhất thời, chung quanh lục sắc thế giới nhanh chóng tán loạn, khiến lại mở to mắt khi, trong tầm mắt, đã là cái kia quen thuộc phòng.


Nhìn lòng bàn tay cái kia màu xanh nhạt ấn ký, Tiêu Triệt chậm rãi nở nụ cười...... Tuy rằng không biết vì cái gì sẽ phát sinh như vậy khó có thể tin tưởng sự, nhưng chính mình chẳng những chết mà trùng sinh, còn có hai thế ký ức. Có lẽ, là lão thiên đều bất bình hắn này hai thế vận mệnh bi thảm, do đó lòng từ bi cho hắn một lần lại lấy được tân sinh cơ hội !


Vân Triệt gặp Thương Vân đại lục vô số tuyệt đỉnh cường giả đuổi giết, tuy rằng cuối cùng Vẫn Diệt, nhưng hắn một người quấy thiên hạ phong vân, loại nào uy phong ! nhưng hắn hiện tại thân thể, lại là bình phàm...... Không khách khí điểm nói, là tra đến cực điểm.


Thiên Huyền đại lục, Huyền Lực vi tôn. Tiêu Triệt tuy rằng sinh tại Tiêu môn, vẫn là thực lực tối cường ngũ trưởng lão Tiêu Liệt tôn tử, nhưng hắn đã là mười sáu chỉnh tuổi, Huyền Lực lại thủy chung đang ở Sơ Huyền cảnh một cấp, hắn từ bảy tuổi rưỡi bắt đầu tu huyền, tám tuổi tiến vào Sơ Huyền cảnh một cấp, sau chỉnh chỉnh tám năm Huyền Lực không có nửa phần tiến bộ, tại Tiêu môn trung nhận hết cười nhạo. Sau này Tiêu Liệt vì hắn mời đến Lưu Vân thành đệ nhất y sư Tư Đồ Doãn vì hắn kiểm tra thân thể, được đến đáp án như tình thiên phích lịch -- hắn dĩ nhiên là trời sinh huyết mạch bị hao tổn, hơn nữa tổn thương cực kỳ nghiêm trọng, cơ hồ không khả năng chữa trị. Dưới loại trạng thái này, Tiêu Triệt đem cả đời đứng ở Sơ Huyền cảnh một cấp, mặc cho như thế nào cố gắng, cũng không khả năng có tiến thêm.


Liền tính liều chết tu luyện, cả đời cũng chỉ có thể là Sơ Huyền cảnh một cấp. Loại này nhân tại Thiên Huyền đại lục không thể nghi ngờ chính là tầng dưới chót nhất tồn tại, hoàn toàn trở thành Tiêu môn một đại trò cười, nếu không phải hắn gia gia Tiêu Liệt là Tiêu môn thậm chí toàn bộ Lưu Vân thành đệ nhất cường giả, căn bản không ai nguyện ý nhiều xem hắn một cái.


Tiêu môn làm Lưu Vân thành tam đại tu Huyền gia tộc chi nhất, cường giả vô số, thế hệ trẻ nhân tài xuất hiện lớp lớp, Tiêu Triệt ở trong đó có thể nói hoàn toàn là có cũng được mà không có cũng không sao tồn tại, chẳng sợ hắn ngày nào đó chết, cũng căn bản không có vài người quan tâm, nhưng hôm nay lại có nhân không tiếc dùng Thí Tâm tán loại này thiên kim khó cầu Vô Ngân kịch độc độc giết hắn, nguyên nhân, hiện tại Tiêu Triệt đương nhiên rõ ràng thấu đáo.


Bởi vì hôm nay là hắn cùng Hạ Khuynh Nguyệt đại hôn ngày.


Hạ Khuynh Nguyệt cùng hắn cùng tuổi, đồng dạng chỉ có mười sáu tuổi. Nhưng như thế tiểu niên kỉ, nàng Huyền Lực lại nghe nói đã đạt tới Sơ Huyền cảnh thập cấp, sắp đột phá Sơ Huyền, bước vào Nhập Huyền cảnh. Có thể ở mười sáu tuổi tới như thế cảnh giới , nàng là Hạ gia trăm năm đến đệ nhất nhân, tại toàn bộ Lưu Vân thành trẻ tuổi đồng lứa trung cũng không có người có thể cùng nàng so sánh. Thậm chí có đồn đãi, nếu nàng tiến cảnh vẫn như vậy duy trì liên tục đi xuống, vài thập niên sau, nàng có khả năng trở thành Hạ gia từ trước tới nay đệ nhất bước vào Địa Huyền cảnh nhân...... Thậm chí, còn có khả năng đạt tới Lưu Vân thành trăm năm đến chưa bao giờ có người dám hy vọng xa vời Thiên Huyền cảnh !


Càng mấu chốt là, nàng chẳng những thiên phú kinh người, càng là thiên tư quốc sắc, là Lưu Vân thành công nhận đệ nhất mĩ nữ. Lưu Vân thành cơ hồ sở hữu có chút tư bản thanh niên tài tuấn đều đối với nàng ái mộ thèm nhỏ dãi, nếu Hạ gia chọn rể, đăng môn nhân phỏng chừng đủ để từ Lưu Vân thành Bắc Môn bài đến Nam Môn.


Chính là như vậy một thiên phú dung nhan đều có thể nói Lưu Vân thành chi tối thiên chi kiêu nữ, thế nhưng muốn gả cho Tiêu gia này một đời tối phế, hơn nữa liên một tia tiền đồ đều không khả năng có đệ tử, Lưu Vân thành không biết bao nhiêu nhân chủy chân đốn ngực, oán giận không thôi...... Này hoàn toàn chính là một đóa ngạo thế liên hoa cắm ở người khác xem đều lười xem một chút trên bãi phân trâu !


Kia vài mê luyến Hạ Khuynh Nguyệt nhân đối Tiêu Triệt đương nhiên là ghen ghét nảy ra, càng nhiều là không cam tâm...... Sẽ có người độc giết hắn, tại hiện tại Tiêu Triệt nghĩ đến, một điểm đều không kỳ quái.


“Quả nhiên là hồng nhan họa thủy.” Tiêu Triệt xuống giường đứng lên, một tiếng lầm bầm lầu bầu. Bất quá nghĩ đến Hạ Khuynh Nguyệt Khuynh Thành chi tư, hắn nhếch miệng nở nụ cười:“Bất quá có thể lấy được như vậy lão bà, thật đúng là không sai bắt đầu.”


--------------------------


Trực tiếp phụ thượng quyển sách Huyền Lực đẳng cấp thiết lập, từ để đến cao vi:[ Sơ Huyền cảnh → Nhập Huyền cảnh → Chân Huyền cảnh → Linh Huyền cảnh → Địa Huyền cảnh → Thiên Huyền cảnh → Vương Huyền cảnh → Bá Huyền cảnh → Quân Huyền cảnh → Thần Huyền cảnh →?], mỗi một cảnh giới phân một đến mười cấp..`,
                chapters: 3,
                likes: 42000,
                views: 980000,
                bookmarks: 21000,
                date: '2023-04-20',
                status: 'ongoing'
            }
        ];
        localStorage.setItem('tutien_stories', JSON.stringify(sampleStories));
    }
    
    // Đảm bảo không ghi đè nếu đã null hoặc có dữ liệu
    if (localStorage.getItem('tutien_currentUser') === undefined) localStorage.setItem('tutien_currentUser', null);
    if (!localStorage.getItem('tutien_drafts')) localStorage.setItem('tutien_drafts', JSON.stringify([]));
    if (!localStorage.getItem('tutien_userXP')) localStorage.setItem('tutien_userXP', JSON.stringify([]));
    if (!localStorage.getItem('tutien_readStories')) localStorage.setItem('tutien_readStories', JSON.stringify([]));
    
    const cultivationRealms = [
        { level: 1, name: "Luyện Khí Kỳ", xpRequired: 100, color: "realm-colors" },
        { level: 2, name: "Trúc Cơ Kỳ", xpRequired: 300, color: "realm-colors-2" },
        { level: 3, name: "Kim Đan Kỳ", xpRequired: 600, color: "realm-colors-3" },
        { level: 4, name: "Nguyên Anh Kỳ", xpRequired: 1000, color: "realm-colors-4" },
        { level: 5, name: "Hóa Thần Kỳ", xpRequired: 1500, color: "realm-colors-5" }
    ];
    
    if (!localStorage.getItem('tutien_cultivationRealms')) {
        localStorage.setItem('tutien_cultivationRealms', JSON.stringify(cultivationRealms));
    }
}

// ===== YOUTUBE VIDEO BACKGROUND =====
let youtubePlayer = null;

function initializeYouTubeBackground() {
    function hideLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => { loadingScreen.style.display = 'none'; }, 500);
        }
    }
    
    function handleYouTubeError() {
        const fallbackVideo = document.querySelector('.fallback-video');
        if (fallbackVideo) {
            fallbackVideo.style.display = 'block';
            const video = fallbackVideo.querySelector('video');
            if (video) video.play().catch(e => console.log('Fallback video play error:', e));
        }
        hideLoadingScreen();
    }
    
    function createYouTubePlayer() {
        try {
            // Kiểm tra YT đã sẵn sàng chưa
            if (!window.YT) { handleYouTubeError(); return; }
            
            youtubePlayer = new YT.Player('youtube-player', {
                videoId: '9y4UGT0GW6Y',
                playerVars: {
                    'autoplay': 1, 'mute': 1, 'controls': 0, 'showinfo': 0,
                    'rel': 0, 'modestbranding': 1, 'playsinline': 1,
                    'iv_load_policy': 3, 'disablekb': 1, 'fs': 0,
                    'loop': 1, 'playlist': '9y4UGT0GW6Y', 'start': 0, 'end': 300
                },
                events: {
                    'onReady': function(event) {
                        event.target.playVideo();
                        hideLoadingScreen();
                        document.addEventListener('click', function initClick() {
                            event.target.playVideo();
                            document.removeEventListener('click', initClick);
                        }, { once: true });
                    },
                    'onStateChange': function(event) {
                        if (event.data === YT.PlayerState.ENDED) event.target.playVideo();
                    },
                    'onError': function(event) { handleYouTubeError(); }
                }
            });
        } catch (error) { handleYouTubeError(); }
    }
    
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = function() { createYouTubePlayer(); };
        setTimeout(function() { if (!youtubePlayer) handleYouTubeError(); }, 5000);
    } else {
        createYouTubePlayer();
    }
}

// ===== DOM ELEMENTS =====
// Lưu ý: elements sẽ được lấy sau khi DOMContentLoaded để đảm bảo an toàn
let elements = {}; 

function cacheElements() {
    elements = {
        trangChu: document.getElementById('trang-chu'),
        thuVien: document.getElementById('thu-vien'),
        vietTruyen: document.getElementById('viet-truyen'),
        dongPhu: document.getElementById('dong-phu'),
        gioiThieu: document.getElementById('gioi-thieu'),
        navLinks: document.querySelectorAll('.nav-links a'),
        nutDangNhap: document.getElementById('nut-dang-nhap'),
        nutDangKy: document.getElementById('nut-dang-ky'),
        nutDangXuat: document.getElementById('nut-dang-xuat'),
        nutBatDauViet: document.getElementById('nut-bat-dau-viet'),
        nutKhamPha: document.getElementById('nut-kham-pha'),
        nutLuuNhap: document.getElementById('nut-luu-nhap'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        modalDangNhap: document.getElementById('modal-dang-nhap'),
        modalDangKy: document.getElementById('modal-dang-ky'),
        closeModals: document.querySelectorAll('.close-modal'),
        formDangNhap: document.getElementById('form-dang-nhap'),
        formDangKy: document.getElementById('form-dang-ky'),
        formTruyen: document.getElementById('form-truyen'),
        containerTruyen: document.getElementById('container-truyen'),
        danhSachTruyen: document.getElementById('danh-sach-truyen'),
        tenNguoiDung: document.getElementById('ten-nguoi-dung'),
        email: document.getElementById('email'),
        thongKe: document.getElementById('thong-ke'),
        capDo: document.getElementById('cap-do'),
        capHienTai: document.getElementById('cap-hien-tai'),
        xpHienTai: document.getElementById('xp-hien-tai'),
        xpCanThiet: document.getElementById('xp-can-thiet'),
        thanhXP: document.getElementById('thanh-xp'),
        truyenDaDoc: document.getElementById('truyen-da-doc'),
        canhGioi: document.getElementById('canh-gioi'),
        demTu: document.getElementById('dem-tu'),
        noiDung: document.getElementById('noi-dung'),
        nutLui: document.getElementById('nut-lui'),
        nutTrangChu: document.getElementById('nut-trang-chu'),
        nutQuayLai: document.getElementById('nut-quay-lai'),
        nutTienToi: document.getElementById('nut-tien-toi'),
        nutTaiLai: document.getElementById('nut-tai-lai')
    };
}

// ===== NAVIGATION SYSTEM (Unified with History API) =====
const SECTIONS = ['hero-section', 'featured-section', 'stories-section', 'write-section', 'profile-section', 'about-section'];

function showSection(sectionId) {
    SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === sectionId) ? 'block' : 'none';
    });
    
    // Scroll lên đầu trang khi chuyển section
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load dữ liệu đặc thù cho từng section
    if (sectionId === 'stories-section') loadStories();
    
    updateActiveNav(sectionId);
}

function updateActiveNav(sectionId) {
    if (!elements.navLinks) return;
    elements.navLinks.forEach(link => link.classList.remove('active'));

    const map = {
        'hero-section': 'trang-chu', 
        'featured-section': 'trang-chu', 
        'stories-section': 'thu-vien', 
        'write-section': 'viet-truyen',
        'profile-section': 'dong-phu', 
        'about-section': 'gioi-thieu'
    };
    
    const activeId = map[sectionId];
    if (activeId) {
        document.getElementById(activeId)?.classList.add('active');
    }
}

function navigateToSection(sectionId, push = true) {
    showSection(sectionId);
    if (push) {
        history.pushState({ section: sectionId }, "", `#${sectionId}`);
    }
}

function goHome() {
    navigateToSection('hero-section');
}

function goBack() {
    history.back();
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', function() {
    cacheElements();
    initializeAppSpecificData();
    initializeYouTubeBackground();
    
    // Xử lý điều hướng ban đầu
    const sectionFromHash = location.hash.replace("#", "");
    if (SECTIONS.includes(sectionFromHash)) {
        navigateToSection(sectionFromHash, false);
    } else {
        navigateToSection("hero-section", false);
    }

    updateUI();
    loadStories();
    setupEventListeners();
    setupStickyNav();
    
    // Notification Welcome
    setTimeout(() => { showNotification('Chào mừng đến với Web Viết Truyện Tu Tiên!', 'success'); }, 2000);
});

// Sự kiện History API (Back/Forward trình duyệt)
window.addEventListener("popstate", (e) => {
    const section = e.state?.section || "hero-section";
    showSection(section);
});

// ===== STICKY NAVIGATION EFFECT =====
function setupStickyNav() {
    const stickyNav = document.querySelector('.sticky-nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) stickyNav.classList.add('scrolled');
        else stickyNav.classList.remove('scrolled');
    });
    
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    // Menu Links
    if (elements.trangChu) elements.trangChu.onclick = (e) => { e.preventDefault(); navigateToSection('hero-section'); };
    if (elements.thuVien) elements.thuVien.onclick = (e) => { e.preventDefault(); navigateToSection('stories-section'); };
    if (elements.vietTruyen) elements.vietTruyen.onclick = (e) => { e.preventDefault(); navigateToSection('write-section'); };
    if (elements.dongPhu) elements.dongPhu.onclick = (e) => { e.preventDefault(); navigateToSection('profile-section'); };
    if (elements.gioiThieu) elements.gioiThieu.onclick = (e) => { e.preventDefault(); navigateToSection('about-section'); };

    // Footer Links (using delegation)
    document.querySelectorAll('a[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection(this.getAttribute('data-section'));
        });
    });

    // Auth Buttons
    elements.nutDangNhap?.addEventListener('click', () => openModal(elements.modalDangNhap));
    elements.nutDangKy?.addEventListener('click', () => openModal(elements.modalDangKy));
    
    // Gọi hàm global handleLogout (từ auth.js)
    elements.nutDangXuat?.addEventListener('click', () => {
        if(typeof window.handleLogout === 'function') window.handleLogout();
    });
    
    // Action Buttons
    elements.nutBatDauViet?.addEventListener('click', (e) => { e.preventDefault(); navigateToSection('write-section'); });
    elements.nutKhamPha?.addEventListener('click', (e) => { e.preventDefault(); navigateToSection('stories-section'); });
    
    // Modal Controls
    elements.closeModals?.forEach(btn => btn.addEventListener('click', closeAllModals));
    
    document.getElementById('hien-dang-ky')?.addEventListener('click', (e) => { e.preventDefault(); closeAllModals(); openModal(elements.modalDangKy); });
    document.getElementById('hien-dang-nhap')?.addEventListener('click', (e) => { e.preventDefault(); closeAllModals(); openModal(elements.modalDangNhap); });
    
    // Auth Forms - Gọi hàm global từ auth.js
    elements.formDangNhap?.addEventListener('submit', (e) => {
        if(typeof window.handleLogin === 'function') window.handleLogin(e);
    });
    elements.formDangKy?.addEventListener('submit', (e) => {
        if(typeof window.handleRegister === 'function') window.handleRegister(e);
    });

    // Story Form
    elements.formTruyen?.addEventListener('submit', handleStorySubmit);
    elements.nutLuuNhap?.addEventListener('click', saveDraft);
    elements.noiDung?.addEventListener('input', updateWordCount);
    
    // Password Toggle
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            if (input.type === 'password') { input.type = 'text'; icon.className = 'fas fa-eye-slash'; }
            else { input.type = 'password'; icon.className = 'fas fa-eye'; }
        });
    });
    
    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterStories(this.getAttribute('data-filter'));
        });
    });
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    // Browser Nav Buttons
    if (elements.nutQuayLai) elements.nutQuayLai.onclick = () => history.back();
    if (elements.nutTienToi) elements.nutTienToi.onclick = () => history.forward();
    if (elements.nutTaiLai) elements.nutTaiLai.onclick = () => location.reload();
    if (elements.nutTrangChu) elements.nutTrangChu.onclick = goHome;
    if (elements.nutLui) elements.nutLui.onclick = () => history.back();
    
    // Outside Click Modal
    window.addEventListener('click', (e) => {
        if (e.target === elements.modalDangNhap) closeModal(elements.modalDangNhap);
        if (e.target === elements.modalDangKy) closeModal(elements.modalDangKy);
    });
}

// ===== MODAL FUNCTIONS =====
function openModal(modal) {
    if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}

function closeModal(modal) {
    if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}

function closeAllModals() {
    if(elements.modalDangNhap) closeModal(elements.modalDangNhap);
    if(elements.modalDangKy) closeModal(elements.modalDangKy);
}

// ===== STORY FUNCTIONS =====
function handleStorySubmit(e) {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để đăng truyện!', 'error');
        openModal(elements.modalDangNhap);
        return;
    }
    const title = document.getElementById('tieu-de').value;
    const genre = document.getElementById('the-loai').value;
    const synopsis = document.getElementById('tom-tat').value;
    const content = document.getElementById('noi-dung').value;
    
    if (!title || !genre || !content) { showNotification('Vui lòng điền đầy đủ thông tin!', 'error'); return; }
    
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const newStory = {
        id: Date.now(), title, author: currentUser.username, genre, synopsis, content,
        chapters: 1, likes: 0, views: 0, bookmarks: 0, date: new Date().toISOString().split('T')[0], status: 'ongoing'
    };
    stories.push(newStory);
    localStorage.setItem('tutien_stories', JSON.stringify(stories));
    
    // Cập nhật thống kê user (cần logic phức tạp hơn chút để update vào danh sách user)
    // Ở đây tạm thời chỉ update UI
    
    elements.formTruyen.reset();
    updateWordCount();
    showNotification('Đăng truyện thành công!', 'success');
    loadStories();
    setTimeout(() => { navigateToSection('stories-section'); }, 1500);
}

function saveDraft() {
    const title = document.getElementById('tieu-de').value;
    const content = document.getElementById('noi-dung').value;
    if (!title && !content) { showNotification('Không có nội dung để lưu!', 'error'); return; }
    
    const drafts = JSON.parse(localStorage.getItem('tutien_drafts')) || [];
    drafts.push({
        id: Date.now(), title, genre: document.getElementById('the-loai').value,
        synopsis: document.getElementById('tom-tat').value, content,
        lastSaved: new Date().toISOString(), wordCount: content.trim().split(/\s+/).length
    });
    localStorage.setItem('tutien_drafts', JSON.stringify(drafts));
    showNotification('Đã lưu bản nháp!', 'success');
}

function updateWordCount() {
    if (elements.demTu && elements.noiDung) {
        elements.demTu.textContent = elements.noiDung.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    }
}

// ===== EXPERIENCE SYSTEM =====
function updateExperience(storyId) {
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    if (!currentUser) return;
    
    let readStories = JSON.parse(localStorage.getItem('tutien_readStories')) || [];
    if (readStories.some(item => item.userId === currentUser.id && item.storyId == storyId)) return;
    
    let userXP = JSON.parse(localStorage.getItem('tutien_userXP')) || [];
    let userXPData = userXP.find(xp => xp.userId === currentUser.id);
    if (!userXPData) {
        userXPData = { userId: currentUser.id, xp: 0, level: 1, storiesRead: 0, lastUpdated: new Date().toISOString() };
        userXP.push(userXPData);
    }
    
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const story = stories.find(s => s.id == storyId);
    if (!story) return;
    
    let xpGained = 50; // Simple logic
    userXPData.xp += xpGained;
    userXPData.storiesRead += 1;
    
    // Level Up Check
    const realms = JSON.parse(localStorage.getItem('tutien_cultivationRealms')) || [];
    let nextRealm = realms.find(r => r.level === userXPData.level + 1);
    while (nextRealm && userXPData.xp >= nextRealm.xpRequired) {
        userXPData.level += 1;
        nextRealm = realms.find(r => r.level === userXPData.level + 1);
        showNotification(`Đột Phá! Đạt cấp ${userXPData.level}`, 'success');
    }
    
    localStorage.setItem('tutien_userXP', JSON.stringify(userXP));
    readStories.push({ userId: currentUser.id, storyId: storyId, readDate: new Date().toISOString(), xpGained });
    localStorage.setItem('tutien_readStories', JSON.stringify(readStories));
    updateExperienceUI(currentUser.id);
    showNotification(`Nhận được ${xpGained} điểm kinh nghiệm!`, 'success');
}

function updateExperienceUI(userId) {
    const userXP = JSON.parse(localStorage.getItem('tutien_userXP')) || [];
    const userXPData = userXP.find(xp => xp.userId === userId);
    const realms = JSON.parse(localStorage.getItem('tutien_cultivationRealms')) || [];
    
    // Nếu chưa có dữ liệu XP, hiển thị mặc định level 1
    if (!userXPData) {
         if (elements.capHienTai) elements.capHienTai.textContent = 1;
         if (elements.xpHienTai) elements.xpHienTai.textContent = 0;
         return;
    }
    
    const currentRealm = realms.find(r => r.level === userXPData.level);
    const nextRealm = realms.find(r => r.level === userXPData.level + 1);
    const xpRequired = nextRealm ? nextRealm.xpRequired : currentRealm.xpRequired * 2;
    const xpProgress = Math.min((userXPData.xp / xpRequired) * 100, 100);
    
    if (elements.capHienTai) elements.capHienTai.textContent = userXPData.level;
    if (elements.xpHienTai) elements.xpHienTai.textContent = userXPData.xp;
    if (elements.xpCanThiet) elements.xpCanThiet.textContent = xpRequired;
    if (elements.thanhXP) elements.thanhXP.style.width = `${xpProgress}%`;
    if (elements.truyenDaDoc) elements.truyenDaDoc.textContent = userXPData.storiesRead;
    if (elements.canhGioi && currentRealm) {
        elements.canhGioi.textContent = currentRealm.name;
        elements.canhGioi.className = `realm-badge ${currentRealm.color}`;
    }
    if (elements.capDo && currentRealm) elements.capDo.textContent = currentRealm.name;
}

// ===== UI FUNCTIONS =====
function updateUI() {
    // Refresh elements cache
    cacheElements();
    
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    
    if (currentUser) {
        if(elements.nutDangNhap) elements.nutDangNhap.style.display = 'none';
        if(elements.nutDangKy) elements.nutDangKy.style.display = 'none';
        if(elements.nutDangXuat) elements.nutDangXuat.style.display = 'flex';
        
        if (elements.tenNguoiDung) elements.tenNguoiDung.textContent = currentUser.username;
        if (elements.email) elements.email.textContent = currentUser.email;
        
        updateProfileStats(currentUser);
        updateExperienceUI(currentUser.id);
        loadUserStories(currentUser.username);
    } else {
        if(elements.nutDangNhap) elements.nutDangNhap.style.display = 'flex';
        if(elements.nutDangKy) elements.nutDangKy.style.display = 'flex';
        if(elements.nutDangXuat) elements.nutDangXuat.style.display = 'none';
        
        if (elements.tenNguoiDung) elements.tenNguoiDung.textContent = 'Chưa Đăng Nhập';
        if (elements.email) elements.email.textContent = 'Vui lòng đăng nhập';
    }
}

function updateProfileStats(user) {
    if (!elements.thongKe) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const userStories = stories.filter(s => s.author === user.username);
    elements.thongKe.innerHTML = `
        <div class="stat-item"><div class="stat-number">${userStories.length}</div><div class="stat-label">Truyện</div></div>
        <div class="stat-item"><div class="stat-number">${user.points || 0}</div><div class="stat-label">Điểm</div></div>
    `;
}

function loadStories() {
    if (!elements.containerTruyen) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    if (stories.length === 0) {
        elements.containerTruyen.innerHTML = '<div class="empty-state"><h3>Chưa có truyện nào</h3></div>';
        return;
    }
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    const filteredStories = activeFilter !== 'all' ? stories.filter(s => s.genre === activeFilter) : stories;
    
    elements.containerTruyen.innerHTML = filteredStories.map(story => `
        <div class="story-card"><div class="story-content">
            <h3 class="chinese-font">${story.title}</h3>
            <p>${story.synopsis}</p>
            <button class="btn btn-outline read-story" data-id="${story.id}">Đọc</button>
        </div></div>
    `).join('');
    
    document.querySelectorAll('.read-story').forEach(btn => {
        btn.addEventListener('click', function() { readStory(this.getAttribute('data-id')); });
    });
}

function filterStories(filter) { loadStories(); }

function loadUserStories(username) {
    if (!elements.danhSachTruyen) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const userStories = stories.filter(s => s.author === username);
    
    if (userStories.length === 0) {
        elements.danhSachTruyen.innerHTML = '<p style="color:var(--text-muted); text-align:center;">Chưa có truyện nào</p>';
        return;
    }
    
    elements.danhSachTruyen.innerHTML = userStories.map(story => `
        <div class="user-story-card"><h4 class="chinese-font">${story.title}</h4></div>
    `).join('');
}

function readStory(storyId) {
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const story = stories.find(s => s.id == storyId);
    if (story) {
        story.views++;
        localStorage.setItem('tutien_stories', JSON.stringify(stories));
        showStoryModal(story);
        setTimeout(() => updateExperience(storyId), 3000);
    }
}

function showStoryModal(story) {
    // Basic implementation of modal display
    const modalHTML = `
    <div class="modal story-modal" id="story-modal" style="display:flex">
        <div class="modal-content story-modal-content" style="max-width: 800px; max-height: 80vh; overflow-y: auto;">
            <span class="close-modal" onclick="this.closest('.modal').remove()" style="position: sticky; top: 10px; float: right;">&times;</span>
            <h2 class="chinese-font" style="text-align: center; color: var(--accent);">${story.title}</h2>
            <div class="story-text" style="white-space: pre-wrap; margin-top: 20px; line-height: 1.8;">${story.content}</div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const color = type === 'success' ? '#4CAF50' : (type === 'error' ? '#f44336' : '#2196F3');
    
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed; 
        top: 20px; 
        right: 20px; 
        padding: 15px 25px; 
        background: #1a1a2e; 
        border-left: 5px solid ${color}; 
        color: #fff; 
        z-index: 9999; 
        border-radius: 4px; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.5s ease;
    `;
    notification.innerText = message;
    
    // Add animation styles dynamically if not exist
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.innerHTML = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => { 
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ===== GLOBAL EXPORTS =====
window.showSection = showSection;
window.openModal = openModal;
window.closeAllModals = closeAllModals;
window.navigateToSection = navigateToSection;
window.goBack = goBack;
window.goHome = goHome;
window.updateUI = updateUI; 
window.showNotification = showNotification;
