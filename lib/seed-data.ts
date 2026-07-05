import {
  Department,
  Team,
  Position,
  Competency,
  PositionCompetency,
  Employee,
  EvaluationPeriod,
  Evaluation,
  IDPItem,
  AIReport,
} from './types';

export const SEED_DEPARTMENTS: Department[] = [
  { id: 'dept-1', name: 'Khối Vận hành', description: 'Vận hành sản xuất', teams: [] },
  { id: 'dept-2', name: 'Phòng Mua hàng (MPO)', description: 'Mua hàng', teams: [] },
  { id: 'dept-3', name: 'Phát triển Tăng trưởng', description: 'Phát triển & Marketing', teams: [] },
];

export const SEED_TEAMS: Team[] = [
  { id: 'team-1', departmentId: 'dept-1', name: 'Nông trường Lạc Dương', description: '' },
  { id: 'team-2', departmentId: 'dept-2', name: 'Mua hàng', description: '' },
  { id: 'team-3', departmentId: 'dept-1', name: 'Quản lý vận hành Sau thu hoạch', description: '' },
  { id: 'team-4', departmentId: 'dept-3', name: 'Brand WinEco', description: '' },
  { id: 'team-5', departmentId: 'dept-1', name: 'Nông trường Hải Phòng', description: '' },
  { id: 'team-6', departmentId: 'dept-1', name: 'Nông trường Quảng Ninh', description: '' },
];

export const SEED_POSITIONS: Position[] = [
  { id: 'pos-1', teamId: 'team-1', departmentId: 'dept-1', name: 'Thực tập sinh', level: 'Rank 6', description: '' },
  { id: 'pos-2', teamId: 'team-2', departmentId: 'dept-2', name: 'Thực tập sinh', level: 'Rank 6', description: '' },
  { id: 'pos-3', teamId: 'team-3', departmentId: 'dept-1', name: 'Thực tập sinh', level: 'Rank 6', description: '' },
  { id: 'pos-4', teamId: 'team-4', departmentId: 'dept-3', name: 'Thực tập sinh', level: 'Rank 6', description: '' },
  { id: 'pos-5', teamId: 'team-5', departmentId: 'dept-1', name: 'Thực tập sinh', level: 'Rank 6', description: '' },
  { id: 'pos-6', teamId: 'team-6', departmentId: 'dept-1', name: 'Thực tập sinh', level: 'Rank 6', description: '' },
];

export const SEED_COMPETENCIES: Competency[] = [
  {
    id: 'comp-1', code: 'K01', name: 'Hiểu về chuyên môn nghiệp vụ', askGroup: 'knowledge', type: 'core',
    definition: 'Nắm vững các kiến thức chuyên môn cần thiết để thực hiện công việc hiệu quả.',
    observableBehaviors: ['Áp dụng kiến thức vào thực tế', 'Cập nhật kiến thức mới', 'Giải quyết vấn đề chuyên môn'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Hiểu các khái niệm cơ bản'] },
      { level: 2, description: 'Trung bình', behaviors: ['Áp dụng được vào công việc thường ngày dưới sự hướng dẫn'] },
      { level: 3, description: 'Khá', behaviors: ['Độc lập xử lý hầu hết công việc chuyên môn'] },
      { level: 4, description: 'Tốt', behaviors: ['Giải quyết các vấn đề phức tạp, hướng dẫn người khác'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Chuyên gia, đóng góp cải tiến quy trình'] }
    ],
    weight: 3, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-2', code: 'S01', name: 'Kỹ năng giao tiếp', askGroup: 'skill', type: 'core',
    definition: 'Khả năng truyền đạt và tiếp nhận thông tin hiệu quả qua lời nói và văn bản.',
    observableBehaviors: ['Trình bày rõ ràng', 'Lắng nghe tích cực', 'Giao tiếp phù hợp đối tượng'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Giao tiếp cơ bản trong nhóm'] },
      { level: 2, description: 'Trung bình', behaviors: ['Trình bày ý tưởng khá rõ ràng'] },
      { level: 3, description: 'Khá', behaviors: ['Giao tiếp hiệu quả liên phòng ban'] },
      { level: 4, description: 'Tốt', behaviors: ['Thuyết phục và đàm phán thành công'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Xử lý giao tiếp khủng hoảng, truyền cảm hứng'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-3', code: 'S05', name: 'Kỹ năng làm việc nhóm', askGroup: 'skill', type: 'core',
    definition: 'Khả năng phối hợp và hợp tác với những người khác để đạt được mục tiêu chung.',
    observableBehaviors: ['Hỗ trợ đồng nghiệp', 'Tôn trọng ý kiến khác biệt', 'Đóng góp tích cực vào công việc chung'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Tham gia vào các hoạt động nhóm'] },
      { level: 2, description: 'Trung bình', behaviors: ['Hoàn thành phần việc được giao trong nhóm'] },
      { level: 3, description: 'Khá', behaviors: ['Chủ động hỗ trợ các thành viên khác'] },
      { level: 4, description: 'Tốt', behaviors: ['Thúc đẩy sự hợp tác và giải quyết xung đột nhóm'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Xây dựng đội nhóm hiệu suất cao'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-4', code: 'A03', name: 'Tập trung vào kết quả', askGroup: 'attitude', type: 'core',
    definition: 'Luôn hướng tới mục tiêu và nỗ lực hoàn thành công việc đúng hạn, đạt chất lượng cao.',
    observableBehaviors: ['Cam kết với mục tiêu', 'Vượt qua trở ngại', 'Không viện lý do'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Hiểu mục tiêu công việc'] },
      { level: 2, description: 'Trung bình', behaviors: ['Thường xuyên hoàn thành công việc đúng hạn'] },
      { level: 3, description: 'Khá', behaviors: ['Nỗ lực đạt được kết quả tốt dù có khó khăn'] },
      { level: 4, description: 'Tốt', behaviors: ['Luôn vượt kỳ vọng về kết quả'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Tạo ra các đột phá về hiệu suất cho tổ chức'] }
    ],
    weight: 3, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  // Add some more competencies for variety
  {
    id: 'comp-5', code: 'K02', name: 'Trình độ ngoại ngữ', askGroup: 'knowledge', type: 'functional',
    definition: 'Khả năng sử dụng ngoại ngữ (chủ yếu là tiếng Anh) trong công việc.',
    observableBehaviors: ['Đọc hiểu tài liệu', 'Giao tiếp email', 'Giao tiếp trực tiếp'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Đọc hiểu từ vựng cơ bản'] },
      { level: 2, description: 'Trung bình', behaviors: ['Đọc hiểu tài liệu chuyên ngành, viết email đơn giản'] },
      { level: 3, description: 'Khá', behaviors: ['Giao tiếp trôi chảy, viết email chuyên nghiệp'] },
      { level: 4, description: 'Tốt', behaviors: ['Thuyết trình và đàm phán bằng ngoại ngữ'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Sử dụng ngoại ngữ như tiếng mẹ đẻ trong công việc'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-6', code: 'S09', name: 'Phân tích và ra quyết định', askGroup: 'skill', type: 'management',
    definition: 'Khả năng phân tích thông tin phức tạp và đưa ra quyết định kịp thời, chính xác.',
    observableBehaviors: ['Thu thập dữ liệu đầy đủ', 'Đánh giá các rủi ro', 'Quyết đoán'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Đưa ra quyết định trong các tình huống đơn giản'] },
      { level: 2, description: 'Trung bình', behaviors: ['Phân tích vấn đề dựa trên dữ liệu có sẵn'] },
      { level: 3, description: 'Khá', behaviors: ['Xử lý các tình huống phức tạp có nhiều biến số'] },
      { level: 4, description: 'Tốt', behaviors: ['Ra quyết định chiến lược có tầm ảnh hưởng lớn'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Dự đoán và ra quyết định đi trước xu hướng'] }
    ],
    weight: 3, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  // === Năng lực chuyên biệt cho HR ===
  {
    id: 'comp-7', code: 'S02', name: 'Kỹ năng đàm phán và thuyết phục', askGroup: 'skill', type: 'functional',
    definition: 'Khả năng thương lượng, đàm phán để đạt được thỏa thuận có lợi cho các bên. Đặc biệt quan trọng trong tuyển dụng, thương lượng offer và giải quyết tranh chấp lao động.',
    observableBehaviors: ['Đưa ra phương án win-win', 'Xử lý từ chối và phản đối hiệu quả', 'Giữ bình tĩnh trong thương lượng căng thẳng', 'Thuyết phục ứng viên/nhân viên thay đổi quan điểm'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Thương lượng trong tình huống đơn giản'] },
      { level: 2, description: 'Trung bình', behaviors: ['Đàm phán offer với ứng viên junior', 'Giải quyết bất đồng nhỏ'] },
      { level: 3, description: 'Khá', behaviors: ['Đàm phán các tình huống phức tạp', 'Thuyết phục quản lý thay đổi quyết định'] },
      { level: 4, description: 'Tốt', behaviors: ['Đàm phán với ứng viên cấp cao, đối tác headhunter', 'Xử lý tranh chấp lao động'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Thiết kế chiến lược đàm phán tổ chức', 'Là chuyên gia hòa giải nội bộ'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-8', code: 'S13', name: 'Kỹ năng đào tạo', askGroup: 'skill', type: 'functional',
    definition: 'Khả năng thiết kế, tổ chức và triển khai các chương trình đào tạo nội bộ nhằm nâng cao năng lực cho đội ngũ nhân viên.',
    observableBehaviors: ['Xác định nhu cầu đào tạo chính xác', 'Thiết kế nội dung phù hợp đối tượng', 'Truyền đạt kiến thức hiệu quả', 'Đánh giá kết quả sau đào tạo'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Hỗ trợ tổ chức lớp học, chuẩn bị tài liệu'] },
      { level: 2, description: 'Trung bình', behaviors: ['Tổ chức workshop nhỏ cho team', 'Hướng dẫn onboarding nhân viên mới'] },
      { level: 3, description: 'Khá', behaviors: ['Thiết kế chương trình đào tạo chuyên sâu', 'Đào tạo trực tiếp nhóm 10-20 người'] },
      { level: 4, description: 'Tốt', behaviors: ['Xây dựng hệ thống đào tạo toàn công ty', 'Đo lường ROI đào tạo'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Thiết kế chiến lược L&D dài hạn', 'Xây dựng văn hóa học tập tổ chức'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-9', code: 'S06', name: 'Kỹ năng quản trị mối quan hệ', askGroup: 'skill', type: 'functional',
    definition: 'Khả năng xây dựng, duy trì và phát triển mạng lưới quan hệ với các bên liên quan bao gồm nhân viên, quản lý, đối tác và ứng viên.',
    observableBehaviors: ['Xây dựng niềm tin và uy tín', 'Duy trì mối quan hệ lâu dài', 'Giải quyết mâu thuẫn giữa các bên', 'Kết nối đúng người đúng việc'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Giao tiếp lịch sự, tạo ấn tượng tốt ban đầu'] },
      { level: 2, description: 'Trung bình', behaviors: ['Duy trì quan hệ tốt với đồng nghiệp và ứng viên'] },
      { level: 3, description: 'Khá', behaviors: ['Xây dựng mạng lưới quan hệ rộng', 'Được tin tưởng bởi nhiều phòng ban'] },
      { level: 4, description: 'Tốt', behaviors: ['Quản trị quan hệ lao động phức tạp', 'Là cầu nối giữa ban lãnh đạo và nhân viên'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Xây dựng chiến lược quản trị nhân tài', 'Tạo dựng employer branding mạnh'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-10', code: 'A05', name: 'Trung thực và bảo mật', askGroup: 'attitude', type: 'core',
    definition: 'Luôn trung thực, minh bạch trong xử lý công việc. Bảo mật thông tin nhân sự, lương thưởng và các dữ liệu nhạy cảm của tổ chức.',
    observableBehaviors: ['Không tiết lộ thông tin lương', 'Xử lý hồ sơ nhân sự bảo mật', 'Báo cáo trung thực', 'Tuân thủ quy định GDPR/PDPA'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Hiểu quy định bảo mật cơ bản'] },
      { level: 2, description: 'Trung bình', behaviors: ['Tuân thủ nghiêm ngặt quy định bảo mật thông tin'] },
      { level: 3, description: 'Khá', behaviors: ['Chủ động phát hiện và ngăn chặn rủi ro bảo mật'] },
      { level: 4, description: 'Tốt', behaviors: ['Xây dựng quy trình bảo mật cho phòng HR', 'Đào tạo nhận thức bảo mật cho team'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Thiết lập hệ thống bảo mật thông tin nhân sự toàn diện'] }
    ],
    weight: 3, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-11', code: 'S03', name: 'Kỹ năng tổ chức và quản lý thời gian', askGroup: 'skill', type: 'core',
    definition: 'Khả năng sắp xếp công việc, ưu tiên nhiệm vụ và quản lý thời gian hiệu quả để hoàn thành nhiều đầu việc song song.',
    observableBehaviors: ['Lập kế hoạch làm việc rõ ràng', 'Ưu tiên công việc đúng đắn', 'Hoàn thành đúng hạn', 'Xử lý đa nhiệm hiệu quả'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Hoàn thành công việc được giao đúng hạn'] },
      { level: 2, description: 'Trung bình', behaviors: ['Tự lập kế hoạch công việc hàng tuần'] },
      { level: 3, description: 'Khá', behaviors: ['Quản lý nhiều dự án HR cùng lúc', 'Phân bổ nguồn lực hợp lý'] },
      { level: 4, description: 'Tốt', behaviors: ['Tối ưu hóa quy trình làm việc cho cả team'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Xây dựng hệ thống quản lý hiệu suất cho tổ chức'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  }
];

export const SEED_POSITION_COMPETENCIES: PositionCompetency[] = [
  { id: 'pc-1', positionId: 'pos-1', competencyId: 'comp-1', requiredLevel: 2, weight: 2 },
  { id: 'pc-2', positionId: 'pos-1', competencyId: 'comp-2', requiredLevel: 2, weight: 2 },
  { id: 'pc-3', positionId: 'pos-1', competencyId: 'comp-3', requiredLevel: 2, weight: 2 },
  { id: 'pc-4', positionId: 'pos-1', competencyId: 'comp-4', requiredLevel: 2, weight: 2 },
  { id: 'pc-5', positionId: 'pos-2', competencyId: 'comp-1', requiredLevel: 2, weight: 2 },
  { id: 'pc-6', positionId: 'pos-2', competencyId: 'comp-2', requiredLevel: 2, weight: 2 },
  { id: 'pc-7', positionId: 'pos-2', competencyId: 'comp-3', requiredLevel: 2, weight: 2 },
  { id: 'pc-8', positionId: 'pos-2', competencyId: 'comp-4', requiredLevel: 2, weight: 2 },
  { id: 'pc-9', positionId: 'pos-3', competencyId: 'comp-1', requiredLevel: 2, weight: 2 },
  { id: 'pc-10', positionId: 'pos-3', competencyId: 'comp-2', requiredLevel: 2, weight: 2 },
  { id: 'pc-11', positionId: 'pos-3', competencyId: 'comp-3', requiredLevel: 2, weight: 2 },
  { id: 'pc-12', positionId: 'pos-3', competencyId: 'comp-4', requiredLevel: 2, weight: 2 },
  { id: 'pc-13', positionId: 'pos-4', competencyId: 'comp-1', requiredLevel: 2, weight: 2 },
  { id: 'pc-14', positionId: 'pos-4', competencyId: 'comp-2', requiredLevel: 2, weight: 2 },
  { id: 'pc-15', positionId: 'pos-4', competencyId: 'comp-3', requiredLevel: 2, weight: 2 },
  { id: 'pc-16', positionId: 'pos-4', competencyId: 'comp-4', requiredLevel: 2, weight: 2 },
  { id: 'pc-17', positionId: 'pos-5', competencyId: 'comp-1', requiredLevel: 2, weight: 2 },
  { id: 'pc-18', positionId: 'pos-5', competencyId: 'comp-2', requiredLevel: 2, weight: 2 },
  { id: 'pc-19', positionId: 'pos-5', competencyId: 'comp-3', requiredLevel: 2, weight: 2 },
  { id: 'pc-20', positionId: 'pos-5', competencyId: 'comp-4', requiredLevel: 2, weight: 2 },
  { id: 'pc-21', positionId: 'pos-6', competencyId: 'comp-1', requiredLevel: 2, weight: 2 },
  { id: 'pc-22', positionId: 'pos-6', competencyId: 'comp-2', requiredLevel: 2, weight: 2 },
  { id: 'pc-23', positionId: 'pos-6', competencyId: 'comp-3', requiredLevel: 2, weight: 2 },
  { id: 'pc-24', positionId: 'pos-6', competencyId: 'comp-4', requiredLevel: 2, weight: 2 },
];

export const SEED_EMPLOYEES: Employee[] = [
  { id: 'emp-1', code: '6204605', fullName: 'Nguyễn Văn Linh', email: 'LINHNV@WINECO.MASANGROUP.COM', departmentId: 'dept-1', teamId: 'team-1', positionId: 'pos-1', level: 'Rank 6', managerId: null, startDate: '2026-02-26', status: 'active' },
  { id: 'emp-2', code: '6240760', fullName: 'Nguyễn Trà My', email: 'MYNT@WINECO.MASANGROUP.COM', departmentId: 'dept-2', teamId: 'team-2', positionId: 'pos-2', level: 'Rank 6', managerId: null, startDate: '2025-11-03', status: 'active' },
  { id: 'emp-3', code: '6290716', fullName: 'Hồ Thị Ly KMy', email: 'KMYHTL@WINECO.MASANGROUP.COM', departmentId: 'dept-1', teamId: 'team-3', positionId: 'pos-3', level: 'Rank 6', managerId: null, startDate: '2026-02-26', status: 'active' },
  { id: 'emp-4', code: '6290717', fullName: 'Nguyễn Vĩnh Tiến', email: 'TIENNV6@WINECO.MASANGROUP.COM', departmentId: 'dept-1', teamId: 'team-3', positionId: 'pos-3', level: 'Rank 6', managerId: null, startDate: '2026-03-02', status: 'active' },
  { id: 'emp-5', code: '6290719', fullName: 'Huỳnh Khánh Hưng', email: 'HUNGHK@WINECO.MASANGROUP.COM', departmentId: 'dept-3', teamId: 'team-4', positionId: 'pos-4', level: 'Rank 6', managerId: null, startDate: '2026-02-26', status: 'active' },
  { id: 'emp-6', code: '6290720', fullName: 'Phạm Minh Thành', email: 'THANHPM@WINECO.MASANGROUP.COM', departmentId: 'dept-3', teamId: 'team-4', positionId: 'pos-4', level: 'Rank 6', managerId: null, startDate: '2026-02-26', status: 'active' },
  { id: 'emp-7', code: '6295324', fullName: 'Kiều Minh Quân', email: 'QUANKM@WINECO.MASANGROUP.COM', departmentId: 'dept-1', teamId: 'team-5', positionId: 'pos-5', level: 'Rank 6', managerId: null, startDate: '2026-03-12', status: 'active' },
  { id: 'emp-8', code: '6295325', fullName: 'Nguyễn Ất Lợi', email: 'LOINA@WINECO.MASANGROUP.COM', departmentId: 'dept-1', teamId: 'team-5', positionId: 'pos-5', level: 'Rank 6', managerId: null, startDate: '2026-03-12', status: 'active' },
  { id: 'emp-9', code: '6295328', fullName: 'Trần Thị Thanh Tâm', email: 'TAMTTT@WINECO.MASANGROUP.COM', departmentId: 'dept-1', teamId: 'team-5', positionId: 'pos-5', level: 'Rank 6', managerId: null, startDate: '2026-03-12', status: 'active' },
  { id: 'emp-10', code: '6296476', fullName: 'Bùi Thị Phương Linh', email: 'LINHBTP@WINECO.MASANGROUP.COM', departmentId: 'dept-3', teamId: 'team-4', positionId: 'pos-4', level: 'Rank 6', managerId: null, startDate: '2026-03-18', status: 'active' },
  { id: 'emp-11', code: '6301209', fullName: 'Trần Thị Duyên', email: 'DUYENTT@WINECO.MASANGROUP.COM', departmentId: 'dept-1', teamId: 'team-6', positionId: 'pos-6', level: 'Rank 6', managerId: null, startDate: '2026-04-07', status: 'active' },
];

export const SEED_EVALUATION_PERIODS: EvaluationPeriod[] = [
  { id: 'ep-1', name: 'Đánh giá Q1-Q2/2026', startDate: '2026-06-01', endDate: '2026-06-30', status: 'active' },
];

export const SEED_EVALUATIONS: Evaluation[] = [];

export const SEED_IDP_ITEMS: IDPItem[] = [];

export const SEED_AI_REPORTS: AIReport[] = [];