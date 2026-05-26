import { ColorToken, TypographyToken, ComponentItem } from './types';

export const PRIMARY_COLORS: ColorToken[] = [
  { name: 'color/primary', hex: '#9F224E', usage: 'CTA Button, Active states' },
  { name: 'color/primary/dark', hex: '#8B1E44', usage: 'Hover states' },
  { name: 'color/primary/light', hex: '#B52759', usage: 'Accent highlights' },
];

export const SECONDARY_COLORS: ColorToken[] = [
  { name: 'color/info', hex: '#076DB6', usage: 'Information text' },
  { name: 'color/success', hex: '#1DB549', usage: 'Success status' },
  { name: 'color/error', hex: '#AE2727', usage: 'Errors, Tags' },
  { name: 'color/secondary/dark-blue', hex: '#04416D', usage: 'Dark accents' },
];

export const FOLDER_COLORS: ColorToken[] = [
  { name: 'Khởi nghiệp', hex: '#5D6C79', status: 'verified' },
  { name: 'Kinh doanh', hex: '#04416D', status: 'verified' },
  { name: 'Đời sống', hex: '#267D97', status: 'verified' },
  { name: 'Sức khỏe', hex: '#03817B', status: 'verified' },
  { name: 'Thể thao', hex: '#498523', status: 'verified' },
  { name: 'Du lịch', hex: '#0072C6', status: 'unverified' },
  { name: 'Khoa học', hex: '#6E6322', status: 'unverified' },
  { name: 'Số hóa', hex: '#C8920A', status: 'unverified' },
  { name: 'Cười', hex: '#DB3B2C', status: 'unverified' },
  { name: 'Giải trí', hex: '#D11149', status: 'unverified' },
  { name: 'Pháp luật', hex: '#5A2429', status: 'unverified' },
];

export const TYPOGRAPHY_PC: TypographyToken[] = [
  { token: 'h1', size: 32, lineHeight: '150%', usage: 'Detail / Title', font: 'Merriweather', weight: 'Bold' },
  { token: 'h1-sm', size: 24, lineHeight: '160%', usage: 'Folder / Special / Tên bệnh', font: 'Merriweather', weight: 'Bold' },
  { token: 'h2', size: 24, lineHeight: '160%', usage: 'Home / Topstory / Title', font: 'Merriweather', weight: 'Bold' },
  { token: 'h2-sm', size: 20, lineHeight: '160%', usage: 'Thông báo (Lightbox title)', font: 'Merriweather', weight: 'Bold' },
  { token: 'h3', size: 20, lineHeight: '160%', usage: 'Folder / Topstory / Title', font: 'Merriweather', weight: 'Bold' },
  { token: 'h3-sm', size: 18, lineHeight: '160%', usage: 'Detail / Chủ đề / Theo dòng sự kiện', font: 'Merriweather', weight: 'Bold' },
  { token: 'h4', size: 18, lineHeight: '160%', usage: 'Title box / Quote / Tên tác giả', font: 'Merriweather', weight: 'Bold' },
  { token: 'h5-body', size: 18, lineHeight: '160%', usage: 'Paragraph / Body', font: 'Arial', weight: 'Regular' },
  { token: 'quiz', size: 17, lineHeight: '160%', usage: 'Quiz / Đáp án', font: 'Arial', weight: 'Regular' },
  { token: 'h5-16', size: 16, lineHeight: '140-160%', usage: 'Số điện thoại / Photo desc', font: 'Arial', weight: 'Regular' },
  { token: 'h6', size: 15, lineHeight: '160%', usage: 'Stream / Title · Số trang', font: 'Merriweather', weight: 'Bold' },
  { token: 'h7-14', size: 14, lineHeight: '140%', usage: 'Title box sponsor', font: 'Arial', weight: 'Bold' },
  { token: 'caption-13', size: 13, lineHeight: '140%', usage: 'Text tài trợ', font: 'Arial', weight: 'Regular' },
  { token: 'caption-12', size: 12, lineHeight: '140%', usage: 'Tin liên quan · Alerts', font: 'Arial', weight: 'Regular' },
];

export const TYPOGRAPHY_MOBILE: TypographyToken[] = [
  { token: 'm/title', size: 18, lineHeight: '150%', usage: 'Mobile title', font: 'Merriweather', weight: 'Bold' },
  { token: 'm/lead', size: 17, lineHeight: '160%', usage: 'Mobile text', font: 'Arial', weight: 'Regular' },
];

export const ATOMS: ComponentItem[] = [
  { id: 'A01', name: 'Button / CTA', variants: 'Primary, Secondary, Split CTA, Mini CTA', states: '5 states', slots: '🔌 label, 🔌 icon' },
  { id: 'A02', name: 'Hyperlink', variants: 'Standard, In-read, Dark theme', states: 'default, hover, visited', slots: '🔌 text' },
  { id: 'A03', name: 'Tag / Label', variants: 'Category, Live, Sponsored, Notification, New', states: '-', slots: '🔌 text' },
  { id: 'A04', name: 'Type-icon', variants: 'Video, Ảnh, Infographic, Interactive, Review, Trắc nghiệm, Tư vấn, Live', states: '-', slots: '-' },
  { id: 'A05', name: 'Timestamp', variants: 'Relative, Absolute', states: '-', slots: '🔌 value' },
  { id: 'A06', name: 'Location label', variants: 'TP HCM, Hà Nội...', states: '-', slots: '🔌 value' },
  { id: 'A07', name: 'Comment count', variants: 'icon + số', states: '-', slots: '🔌 value' },
  { id: 'A08', name: 'Divider', variants: 'Full-bleed, Inset, Title-bar', states: '-', slots: '-' },
  { id: 'A09', name: 'Avatar', variants: 'User, Author', states: 'có/không ảnh', slots: '🔌 image' },
  { id: 'A10', name: 'Logo', variants: 'VnExpress, Logo phụ', states: 'Light/Dark', slots: '🔌 image' },
  { id: 'A11', name: 'Input / Text Field', variants: 'Standard', states: '5 states', slots: '🔌 label, 🔌 helper, 🔌 icon' },
  { id: 'A12', name: 'Dropdown / Select', variants: 'Standard', states: 'đóng/mở/search', slots: '🔌 options' },
  { id: 'A13', name: 'Checkbox / Radio', variants: 'Standard', states: '3 states', slots: '-' },
  { id: 'A14', name: 'Star rating', variants: '1-5 sao', states: 'active/inactive', slots: '-' },
  { id: 'A15', name: 'Pagination', variants: 'Số trang + prev/next', states: '4 states, active=#9F224E', slots: '-' },
  { id: 'A16', name: 'Badge / Counter', variants: 'Comment, Dot', states: '-', slots: '🔌 value' },
  { id: 'A17', name: 'Skeleton / Loading', variants: 'Line, Block, Thumb', states: '-', slots: '-' },
];

export const INITIAL_CHECKLIST = [
  { id: 't1', section: 'Tokens', label: 'Color (Light + Dark)', completed: true },
  { id: 't2', section: 'Tokens', label: 'Typography (H1–H7)', completed: true },
  { id: 't3', section: 'Tokens', label: 'Spacing (5/10/15/20)', completed: true },
  { id: 't4', section: 'Tokens', label: 'Shadow & Scrim', completed: true },
  { id: 't5', section: 'Tokens', label: 'Border/Radius (Mobile 3px, PC 0px)', completed: true },
  { id: 't6', section: 'Tokens', label: 'Icon set (Outline, Filled, Dạng bài)', completed: true },
  
  { id: 'a1', section: 'Atoms', label: 'Button & Hyperlink', completed: false },
  { id: 'a2', section: 'Atoms', label: 'Tags & Type-icons', completed: false },
  { id: 'a3', section: 'Atoms', label: 'Inputs & Checkboxes', completed: false },
  { id: 'a4', section: 'Atoms', label: 'Pagination & Timestamp', completed: false },

  { id: 'm1', section: 'Molecules', label: 'Block tin (Full variant matrix)', completed: false },
  { id: 'm2', section: 'Molecules', label: 'Author & Comment item', completed: false },
  { id: 'm3', section: 'Molecules', label: 'Navigation & Breadcrumb', completed: false },
  { id: 'm4', section: 'Molecules', label: 'Social share & Quote', completed: false },

  { id: 'o1', section: 'Organisms', label: 'Header & Footer (PC/Mobile)', completed: false },
  { id: 'o2', section: 'Organisms', label: 'Topstory & List/Stream', completed: false },
  { id: 'o3', section: 'Organisms', label: 'Box 300 (Sidebar)', completed: false },
  { id: 'o4', section: 'Organisms', label: 'Comment Section', completed: false },
  { id: 'o5', section: 'Organisms', label: 'Popups (P01–P10)', completed: false },

  { id: 'p1', section: 'Templates', label: 'Home Page', completed: false },
  { id: 'p2', section: 'Templates', label: 'Folder Page', completed: false },
  { id: 'p3', section: 'Templates', label: 'Detail Page (Light/Dark)', completed: false },
  { id: 'p4', section: 'Templates', label: 'Mobile Set Base', completed: false },
];
