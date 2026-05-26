# VnExpress — Component Inventory & Style Guide Spec

### Áp dụng cho Landingpage / Tin tức (PC + Mobile) — Dựng trên Figma

> **Mục tiêu:** Danh sách đầy đủ, không sót, để 1 nhân sự chuyên trách dựng toàn bộ component theo chuẩn Atomic Design + Variant + Slot.

---

## CÁCH ĐỌC TÀI LIỆU (phương pháp luận)

Cấu trúc theo **Atomic Design** — đi từ nhỏ tới lớn, mỗi tầng kế thừa tầng dưới:

| Tầng          | Là gì                                       | Ví dụ                                  |
| ------------- | ------------------------------------------- | -------------------------------------- |
| **Tokens**    | Biến nền (màu, font, spacing) — không vẽ ra | `color/primary`, `text/h2`, `space/20` |
| **Atoms**     | Phần tử nhỏ nhất, không chia nhỏ được       | Button, Tag, Timestamp, Input          |
| **Molecules** | Ghép vài atom thành 1 khối có nghĩa         | **Block tin**, Comment item, Author    |
| **Organisms** | Ghép nhiều molecule thành 1 vùng            | Header, Box 300, Comment section       |
| **Templates** | Bộ khung sắp xếp organism trên grid         | Home, Folder, Detail                   |

**Quy ước Slot (bắt buộc):** mọi phần "có thể thay đổi" để dạng **component slot / instance swap**, không vẽ cứng. Đánh dấu 🔌 trong tài liệu = đây là slot.

**Quy ước trạng thái (States):** mọi atom tương tác phải đủ 5 state — `default / hover / focus / disabled / processing(loading)`.

**Quy ước responsive:** mỗi component có **2 biến thể `Platform = PC / Mobile`**. Không tạo 2 component riêng → dùng property để switch.

---

# PHẦN 0 — DESIGN TOKENS (Foundations)

Đây là nền tảng. **Dựng token trước tiên**, mọi component sau đều tham chiếu token (không hardcode màu/size).

## 0.1 — Color Tokens

_(Trích từ artboard Color — xác nhận lại mã hex chính xác từ file gốc)_

**Primary**

- `color/primary` — Bordeaux Red `#9F224E` → dùng cho **CTA Button**
- `color/primary/dark` `#8B1E44` · `color/primary/light` `#B52759`

**Secondary / Semantic**

- `color/info` — Blue `#076DB6` → thông tin (CHỐT)
- `color/success` — Green `#1DB549` → trạng thái thành công
- `color/error` — Red `#AE2727` → lỗi + tag Notification
- `color/secondary/dark-blue` `#04416D`

**Grey scale (Text + UI)**

- `#222` (text mặc định) · `#4F4F4F` · `#757575` · `#BDBDBD` · `#E5E5E5` · `#F7F7F7`

**Text — Dark theme**

- `#FFFFFF` · `#E5E5E5` · `#BDBDBD` · `#757575` · link `#43BAFF` / `#2EB9FF`

**Divider & Background**

- `divider/default` `#E5E5E5` (_be always used!_) · `bg/note` `#FCFAF8` · `bg/dark` `#17171A`

**Folder colors** — palette riêng theo chuyên mục, mỗi folder 1 cặp `normal + hover` → token theo tên folder: `color/folder/{ten}/default` & `/hover`.

✅ **Đã xác nhận đúng (nhãn khớp swatch):**
| Folder | Default | Hover |
|---|---|---|
| XE | `#5D6C79` | `#8392A0` |
| Kinh doanh | `#04416D` | `#065E9D` |
| Đời sống | `#267D97` | `#309FC0` |
| Sức khỏe | `#03817B` | `#049B93` |
| Thể thao | `#498523` | `#5FAE2E` |

⚠️ **NHÃN HEX SAI trong file gốc — phải lấy lại bằng eyedropper từ swatch** _(số dưới chỉ là ước lượng từ ảnh để đối chiếu, KHÔNG dùng làm giá trị cuối):_
| Folder | Swatch thực | Hex ghi sai trong file | Ước lượng default | Ước lượng hover |
|---|---|---|---|---|
| Du lịch | xanh dương sáng | `#5D6C79` (xám) | ≈ `#0072C6` | ≈ `#0083D6` |
| Khoa học | olive/vàng rêu | `#5D6C79` (xám) | ≈ `#6E6322` | ≈ `#A8973C` |
| Số hóa | vàng hổ phách/gold | `#04416D` (navy) | ≈ `#C8920A` | ≈ `#F5A623` |
| Cười | đỏ | `#5D6C79` (xám) | ≈ `#DB3B2C` | ≈ `#F08679` |
| Giải trí | hồng sen/magenta | `#5D6C79` (xám) | ≈ `#D11149` | ≈ `#F03E7C` |
| Pháp luật | nâu mận đậm | `#5D6C79` (xám) | ≈ `#5A2429` | ≈ `#9D4F4F` |

> 🛠️ **Hành động:** mở file Color gốc, dùng eyedropper lấy hex thật của 6 folder trên rồi thay vào token. Đồng thời **sửa luôn nhãn trong file gốc** để lần sau không tái phạm.

**Advertisement** — Orange `#FDDC79` (nền tag tài trợ). _(Lưu ý: artboard mới ghi `ADVERTISEMENT ICON #5D6C79` — đây cũng là nhãn xám dán nhầm; màu icon ad thực tế là cam → lấy lại từ swatch.)_

**Social** — FB `#3B5998` · Twitter `#55ACEE` · Messenger `#0084FF` · Youtube `#CD2D1F`.

**Note / Quiz** — Note yellow `#FFF7AA` · Note red `#FFE7E9` · Note purple `#E8E8FF` · Quiz correct/incorrect.

> ⚠️ **Việc cần làm:** export toàn bộ hex từ artboard Color thành **Figma Variables** (Collection: `Color`, mode: `Light` / `Dark`).

## 0.2 — Typography Tokens

**Font family:**

- **Tiêu đề → Merriweather** (Regular / Bold)
- **Lead + Body/Detail → Arial** (Regular / Bold)

**Type scale (chuẩn từ artboard Typeface):**

| Token        | Size   | Line-height | Dùng cho                                     |
| ------------ | ------ | ----------- | -------------------------------------------- |
| `h1`         | **32** | 150%        | Detail / Title                               |
| `h1-sm`      | 24     | 160%        | Folder / Special / Tên bệnh                  |
| `h2`         | **24** | 160%        | Home / Topstory / Title                      |
| `h2-sm`      | 20     | 160%        | Thông báo (Lightbox title)                   |
| `h3`         | **20** | 160%        | Folder / Topstory / Title                    |
| `h3-sm`      | 18     | 160%        | Detail / Chủ đề / Theo dòng sự kiện          |
| `h4`         | **18** | 160%        | Title box / Quote / Tên tác giả              |
| `h5-body`    | **18** | 160%        | Paragraph / Body                             |
| `quiz`       | 17     | 160%        | Quiz / Đáp án                                |
| `h5-16`      | 16     | 140–160%    | Số điện thoại / Photo description            |
| `h6`         | **15** | 160%        | Stream / Title · Số trang · Button           |
| `h7-14`      | 14     | 140%        | Title box sponsor · Navigation · Stream lead |
| `caption-13` | 13     | 140%        | Text tài trợ                                 |
| `caption-12` | 12     | 140%        | Tin liên quan · Alerts / Annotations         |

> 📌 Lưu ý: H1 = 150% line-height, từ H2 xuống chủ yếu 160% (title) / 140% (caption/nav). Tạo **Figma Text Styles** theo bảng. Bảng trên là **scale gốc**.

**Token chữ ỨNG DỤNG (CHỐT — dùng đúng theo ngữ cảnh):**

_Bài chi tiết (Detail body):_
| Token | PC | Mobile |
|---|---|---|
| `title-detail` | 32px · 150% · Merriweather Bold · `#222` | 22px · 150% · Merriweather Bold · `#222` |
| `body` | 18px · 160% · Arial 400 · `#222` | 18px · 160% · Arial 400 · `#222` |
| `caption` | 14px · 160% · Arial 400 · `#222` | 17px · 160% · Arial 400 · `#222` |

_Block list tin (Title + Lead):_
| Token | PC | Mobile |
|---|---|---|
| `list/title` | 20px · 160% · Merriweather Bold · `#222` | 18px · 150% · Merriweather Bold · `#222` |
| `list/lead` | 16px · 160% · Arial · `#4F4F4F` | 17px · 160% · Arial · `#4F4F4F` |

> 🎨 **Font LDP:** mọi `title-detail` & `list/title` mặc định Merriweather Bold nhưng **mỗi landingpage override được bằng font thương hiệu** → token `font/ldp-title` (swap được), fallback Merriweather.
> 📌 **Lưu ý sự khác biệt:** title-detail Mobile = 22 nhưng list-title Mobile = 18; caption Mobile = 17 (lớn hơn PC 14) cho dễ đọc. Đây là token riêng, **không gộp**.

## 0.3 — Spacing & Grid Tokens

**Grid PC (CHỐT — container 1100px):**

- Màn hình thiết kế: **1920px** · **Vùng lưới (grid/content) = 1100px**
- **12 columns** · Column width **66px** · Gutter width **28px**
- _(Kiểm chứng: 12×66 + 11×28 = **1100** ✓ — khớp Masthead 1100 & Breakpage 1100)_
- Margin mép (ngoài grid) = 20px mỗi bên → vùng tổng 1140px. **Lý do dùng 1100:** chừa không gian 2 bên cho **quảng cáo Background (Background U)**.

**Spacing vertical (token spacing):**
| Token | Giá trị | Dùng khi |
|---|---|---|
| `space/normal` | **5px** | Khoảng cách thường |
| `space/double` | **10px** | Trong cùng 1 nội dung |
| `space/cta` | **15px** | Dưới CTA → content |
| `space/section` | **20px** | Tách section / nhóm |

**Grid Mobile (CHỐT — màn 414px):**

- Màn thiết kế: **414px**
- **Outer margin: 20px mỗi bên → content max-width = 374px**
- Layout: 1 cột dọc; gutter thumb↔text 8–12px
- Khoảng cách block↔block: `space/double 10px`; giữa section: `space/section 20px`

> 📌 Component `Platform = Mobile` đặt trong frame 414px, nội dung canh trong 374px. Auto Layout fill-width (không hardcode 374) để chạy đúng dải 360–430px.

## 0.4 — Elevation / Shadow

- `shadow/popup` — `0px 2px 8px rgba(0,0,0,0.1)` (Popup container)
- `scrim/overlay` — nền tối `#000` opacity **75%** (lớp nền popup)

## 0.5 — Border / Divider / Radius

- `border/divider` — **1px** solid `#E5E5E5` — full-bleed hoặc inset
- `border/input-active` — black border (viền active của Text Field)
- Radius tokens (CHỐT):
  - `radius/none` = **0px** — mặc định UI/PC (góc gần vuông)
  - `radius/thumb` = **3px** — bo góc ảnh thumbnail (áp dụng cho **thumb trên Mobile**)
  - _(PC thumb: mặc định 0px — chốt lại nếu muốn đồng bộ 3px cho cả PC)_

## 0.6 — Iconography Tokens

**2 style:** `Outline` + `Filled`.
**Nhóm icon (theo artboard):**

- **General** (search, share, arrow, home, user, mail, link…)
- **Weather** · **Media** (play, pause, volume, fullscreen…) · **Device** · **Edit** (bold, italic, list, quote…)
- **Dạng bài** (loại bài) ⚠️ _quan trọng — map sang type-icon của Block tin_

**Icon "Dạng bài" cần có:** `Tư vấn` · `Infographic` · `Review` · `Ảnh` · `Video` · `Audio` · `Trắc nghiệm` · `Interactive` · `Live` (chấm đỏ) · `Longform`.

## 0.7 — Breakpoints

| Tên          | Range  | Container                                                  |
| ------------ | ------ | ---------------------------------------------------------- |
| PC / Desktop | ≥ 1140 | **grid 1100px** (12 col) + margin 20px ngoài               |
| Mobile       | ≤ 768  | frame **414px**, margin 20px → **content 374px**, list dọc |

---

# PHẦN 1 — COMPONENT INVENTORY

## 1.1 — ATOMS (PC + Mobile)

| #    | Component                         | Variants                                                                               | States                                                            | Slot                         |
| ---- | --------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------- |
| A01  | **Button / CTA**                  | Primary · Secondary · Split CTA · Mini CTA · Disable                                   | default/hover/focus/disabled/processing                           | 🔌 label, 🔌 icon            |
| A02  | **Hyperlink**                     | Standard (underline) · In-read · Dark theme                                            | default/hover/visited                                             | 🔌 text                      |
| A03  | **Tag / Label**                   | Category (theo folder color) · `Live` (đỏ) · `Sponsored` · `Notification` (đỏ) · `New` | –                                                                 | 🔌 text                      |
| A04  | **Type-icon (Dạng bài)**          | Video/Ảnh/Audio/Infographic/Interactive/Review/Trắc nghiệm/Tư vấn/Live                 | –                                                                 | –                            |
| A05  | **Timestamp**                     | Relative ("1h trước") · Absolute (dd/mm/yyyy HH:mm)                                    | –                                                                 | 🔌 value                     |
| A06  | **Location label**                | "TP HCM" · "Hà Nội" …                                                                  | –                                                                 | 🔌 value                     |
| A07  | **Comment count**                 | icon + số                                                                              | –                                                                 | 🔌 value                     |
| A08  | **Divider**                       | Full-bleed · Inset · Title-bar                                                         | –                                                                 | –                            |
| A09  | **Avatar**                        | User · Author                                                                          | có/không ảnh                                                      | 🔌 image                     |
| A10  | **Logo**                          | VnExpress · Logo phụ landingpage                                                       | Light/Dark                                                        | 🔌                           |
| A11  | **Input / Text Field**            | Default·Active·Filled·Error·Disabled (Filled-can't-edit)                               | 5 states                                                          | 🔌 label, 🔌 helper, 🔌 icon |
| A12  | **Dropdown / Select**             | đóng · mở · search-in-dropdown                                                         | default/active/disabled                                           | 🔌 options                   |
| A13  | **Checkbox / Radio**              | –                                                                                      | checked/unchecked/disabled                                        | –                            |
| A14  | **Star rating**                   | 1–5 sao (đánh giá)                                                                     | active/inactive                                                   | –                            |
| A15  | **Pagination**                    | ô vuông số trang + prev/next (chevron)                                                 | default / **active = nền `#9F224E` chữ trắng** / hover / disabled | –                            |
| A15b | **"Xem theo ngày" (date filter)** | icon lịch + label, đi kèm pagination ở cuối stream folder                              | default / open (date picker)                                      | 🔌                           |
| A16  | **Badge / Counter**               | comment, notification dot                                                              | –                                                                 | 🔌                           |
| A17  | **Skeleton / Loading**            | line · block · thumb                                                                   | –                                                                 | –                            |

> **In-read hyperlink** có 2 theme (Light + Dark) — bắt buộc đủ cả 2 (xem artboard Hyperlink).

## 1.2 — MOLECULES

### ⭐ 1.2.1 — BLOCK TIN (component cốt lõi — chi tiết nhất)

**Cấu trúc slot của 1 Block tin:**

```
[type-icon]🔌 + [Tag/Live]🔌
[Thumbnail]🔌 (có badge type-icon góc dưới trái đối với Ảnh, Video, VnEGO, Infographic...)
[Title]🔌
[💬 Comment-count]🔌 (nếu rỗng Lead; chỉ xuất hiện khi > 15)
[Lead/Sapo]🔌
[💬 Comment-count]🔌 (nếu đủ Title, Lead, Thumb; chỉ xuất hiện khi > 15)
[Meta: timestamp🔌 + location🔌 + category🔌]
```

**Ma trận biến thể (Variants) — để Figma property:**

**a) Thumbnail (`thumb`)**

- `Có thumb` / `Không thumb` (no-thumb dùng type-icon đứng trước title)
- Vị trí: `Thumb-Top` · `Thumb-Bottom` · `Thumb-Left` · `Thumb-Right` · `Thumb-Full-bleed`
- **Tỷ lệ (`ratio`):** `5:3` (mặc định) · `1:1` · `circle` (góc nhìn) · `16:9` (video ngang) · `3:5` (video dọc)
- **Radius:** Mobile = 3px (`radius/thumb`); PC = 0px
- **Pattern Mobile:** tin #1 = `Thumb-Top`; tin 2→hết = **title-led + `Thumb-Bottom`** (chi tiết trong file Block tin Build Spec, mục 4b).

**b) Kích thước (`size`)**

- `Topstory` (lớn — ảnh to + lead) → H2 24
- `Standard` (mặc định folder) → H3 20
- `Stream` (list dày) → H6 15
- `Mini` (sidebar / tin liên quan) → caption 12–14

**c) Dạng bài (`type`)** — đổi type-icon: Video / Ảnh / Infographic / Interactive / Live / Review / Trắc nghiệm / Tư vấn / Longform / Tin thường

**d) Thành phần bật/tắt (boolean property — chống sót!):**

- `show-lead` ✓/✗
- `show-timestamp` ✓/✗
- `show-location` ✓/✗
- `show-category` ✓/✗
- `show-comment` ✓/✗
- `show-tag` ✓/✗

**e) States:** `default / hover / visited / loading(skeleton)`

> ✅ Cách dựng: **1 component "Block tin" duy nhất** với các property `Platform · size · thumb · thumb-position · type · 6 boolean · state`. Tổ hợp này phủ hết mọi block trong Home/Folder/Detail mà không cần vẽ riêng từng cái.

### 1.2.2 — Molecules khác

| #   | Component                      | Ghi chú                                                                               |
| --- | ------------------------------ | ------------------------------------------------------------------------------------- |
| M01 | **Author info**                | avatar + tên (H4 18) + chức danh                                                      |
| M02 | **Comment item**               | avatar, tên, time, nội dung, like/reply, nested reply                                 |
| M03 | **Search bar**                 | input + icon (Header)                                                                 |
| M04 | **Navigation item**            | text (H7 14) + active state + folder color                                            |
| M05 | **Breadcrumb**                 | Home > Folder > Bài                                                                   |
| M06 | **Social share row**           | FB/Twitter/Mail/Copy link (Light + Dark)                                              |
| M07 | **Quote block**                | quote + tên người nói (H4 18)                                                         |
| M08 | **Box title / Section header** | tên chuyên mục + sub-tabs + "Xem thêm »"                                              |
| M09 | **Toast**                      | message + (optional) action — auto-dismiss                                            |
| M10 | **Notification item**          | trong panel thông báo (avatar/icon + text + time + "Xem thêm")                        |
| M11 | **Voting option**              | dùng cho Bình chọn (label + bar % + count)                                            |
| M12 | **Short video card**           | thumb **4:5** · Title · icon Play (overlay) · tên show · **icon Video**               |
| M13 | **Video card**                 | thumb **5:3** · Title · tên show · **thời lượng** · **icon Video**                    |
| M14 | **Audio card**                 | thumb **5:3** (hiển thị ảnh 5:3) · Title · tên show · **thời lượng** · **icon Audio** |

> 📌 **Media card (M12–M14)** tách riêng khỏi Block tin vì có thành phần đặc thù (tên show, thời lượng, overlay play, icon media). Dựng 1 component set `Media card` với property `type = Short / Video / Audio` → đổi ratio (4:5/5:3), icon, và bật/tắt thời lượng. Chi tiết build: xem **Block tin Build Spec, mục 5b**.

## 1.3 — ORGANISMS

| #   | Component                                                                     | Biến thể / Ghi chú                                                                                                                                                                            |
| --- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| O01 | **Header**                                                                    | PC (logo + nav full + search + user + date) · Mobile (logo + hamburger + user) · Light/Dark                                                                                                   |
| O02 | **Footer**                                                                    | PC · Mobile · thông tin tòa soạn                                                                                                                                                              |
| O03 | **Topstory block**                                                            | tin chủ + grid 4–8 tin phụ (xem template Folder)                                                                                                                                              |
| O04 | **List / Stream**                                                             | dạng: `Thượng viện & Hạ viện` · `Stream` · các kiểu trong artboard List/Stream                                                                                                                |
| O05 | **Box 300 (sidebar)** ⚠️ _(ngoài phạm vi Landingpage / không có trên Mobile)_ | biến thể: `Ảnh` · `Video` · `Longform` · `Bảng giá` · `Tỷ giá/Lãi suất` · `Tác giả nổi bật` · `Đánh giá thành lý` · `Internet banking` · `Lịch thi đấu` · `Chủ đề hot` · `Bài viết trong tay` |
| O06 | **Comment section (Ý kiến bạn đọc)**                                          | header (số ý kiến) + sort + list comment + "Xem thêm" + ô nhập                                                                                                                                |
| O07 | **Related news (Tin liên quan)**                                              | list mini block (Light + Dark)                                                                                                                                                                |
| O08 | **Theo dòng sự kiện / Chủ đề**                                                | banner xanh + grid + "Theo dõi sự kiện →"                                                                                                                                                     |
| O09 | **Most viewed (Xem nhiều nhất)**                                              | list đánh số                                                                                                                                                                                  |
| O10 | **Native Ad blocks**                                                          | `Tin tài trợ` · `Shop VnExpress` · `Ewiki` · `Kid lab` · `Fsell` · `Ebank` · `Quà tặng` · `Thông tin doanh nghiệp` (xem Advertise format)                                                     |
| O11 | **Vote / Bình chọn**                                                          | flow vote (xem Block Vote)                                                                                                                                                                    |
| O12 | **Infographic / Interactive embed**                                           | khối nội dung đặc biệt trong Detail                                                                                                                                                           |
| O13 | **Ad slot family** (quảng cáo hiển thị)                                       | xem mục 1.3.2 — Masthead · Large 1 · Breakpage · Content Ad · Background                                                                                                                      |

### 1.3.2 — AD SLOTS (quảng cáo hiển thị — quan trọng cho Landingpage)

| Slot                          | Kích thước                               | Vị trí / Quy tắc                                                                       |
| ----------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------- |
| **Masthead**                  | 1920×300 · 1920×270 · 1100×250 · 970×250 | ngay dưới header. **Không hiển thị đồng thời với Background U**                        |
| **Large 1**                   | 300×600                                  | cột phải, **sticky (dính) 5s**. ⚠️ Chỉ dùng ở **Template 2** — KHÔNG dùng ở Template 1 |
| **Breakpage 1**               | 1100×250 · 970×250 · 970×90              | chèn ngang giữa các cụm nội dung                                                       |
| **Content Ad**                | (native, nền vàng `#FDDC79`)             | xen giữa stream — nhãn "Content Ad"                                                    |
| **Background (Background U)** | 2 mép ngoài grid 1100                    | full-page; loại trừ lẫn nhau với Masthead                                              |

> ⚠️ **Quy tắc loại trừ:** Masthead và Background **không** chạy đồng thời. Large 1 chỉ ở layout có cột phải (Template 2).

### 1.3.1 — POPUPS (Overlay organisms)

_(scrim #000 75% + shadow popup)_

| #   | Popup                               | Layout                                                   |
| --- | ----------------------------------- | -------------------------------------------------------- |
| P01 | **Đăng nhập / Đăng ký**             | tab Đăng nhập · Tạo tài khoản · social login (FB/Google) |
| P02 | **Đăng nhập để bình luận**          | rút gọn                                                  |
| P03 | **Tải app**                         | International · VnExpress (QR + store badges)            |
| P04 | **Thông báo** (Single button)       | message + 1 CTA                                          |
| P05 | **Kết quả**                         | Quiz result · Calo · BMI                                 |
| P06 | **Hướng dẫn**                       | text dài + CTA                                           |
| P07 | **Quy định**                        | scroll content (Split buttons)                           |
| P08 | **Đăng ký nhận tin**                | email input + CTA                                        |
| P09 | **Đánh giá**                        | star rating + textarea + CTA                             |
| P10 | **Quy định / Thể lệ** (landingpage) | –                                                        |

## 1.4 — TEMPLATES (Page-level)

| #      | Template                                       | Mô tả                                                                             |
| ------ | ---------------------------------------------- | --------------------------------------------------------------------------------- |
| T01    | **Home**                                       | topstory + nhiều box folder + ad + sidebar                                        |
| T02    | **Folder (Chuyên mục)**                        | topstory folder + stream + Box 300 sidebar                                        |
| T03    | **Detail (Bài viết)**                          | title + sapo + body + ảnh + share + tin liên quan + comment + sidebar "Xem nhiều" |
| T04    | **Detail — Dark theme**                        | bản tối (longform/special)                                                        |
| T05    | **Landingpage / Sự kiện**                      | header custom + box chuyên đề (xem Folder tin tức/thể lệ, Điều hướng)             |
| T06    | **Print bài viết**                             | layout in (xem "in nội dung bài viết")                                            |
| T07    | **Mobile templates**                           | bản mobile của T01–T05                                                            |
| **T1** | **Template 1 — Cụm 7 tin Top (không Large 1)** | landingpage sự kiện / tiêu điểm. Chi tiết: mục 2.4                                |
| **T2** | **Template 2 — Cụm 8 tin Top + Large 1**       | trang thư mục loại 2 / chuyên trang, có cột ad phải. Chi tiết: mục 2.5            |
| **T3** | **Template 3 — Cụm 3 tin Top + Large 1**       | trang có cột ad phải. Chi tiết: mục 2.6                                           |

---

# PHẦN 2 — CẤU TRÚC TEMPLATE / BỘ KHUNG HIỂN THỊ

> Mọi template dựng trên grid **12 col / 1140px (PC)**. Mobile: 1 cột dọc.

### 2.1 — Home / Folder (PC)

```
┌─────────────────────────────────────────────┐
│ HEADER (full-bleed, sticky)                   │
├──────────────────────────────┬──────────────┤
│ MAIN (≈ 8 col)               │ SIDEBAR (≈4) │
│ ┌─ Topstory block ─────────┐ │ ┌ Box 300 ─┐ │
│ │ tin chủ + 4–8 tin phụ    │ │ │ Ad/Video │ │
│ └──────────────────────────┘ │ │ Xem nhiều│ │
│ [Box title] ── Stream ───     │ │ Tin tài  │ │
│ [Native Ad row]              │ │ trợ      │ │
│ [Box title] ── Stream ───     │ └──────────┘ │
├──────────────────────────────┴──────────────┤
│ FOOTER                                        │
└─────────────────────────────────────────────┘
```

**Spacing:** giữa các section = `space/section 20px`; trong 1 box = `space/double 10px`.

### 2.2 — Detail / Bài viết (PC)

```
┌─ HEADER ──────────────────────────────────────┐
│ [Share rail dọc] │ TITLE (H1 32)               │ SIDEBAR
│  FB/TW/Mail/...  │ Sapo (Arial)                │ Xem nhiều
│                  │ Author + Timestamp          │ Tin liên
│                  │ BODY (H5 body 18/160%)      │ quan
│                  │ + Ảnh + caption (16)        │ Native ad
│                  │ + In-read hyperlink         │
│                  │ [Share row]                 │
│                  │ Tin liên quan / Theo dòng SK │
│                  │ Ý kiến bạn đọc (comment)    │
└─ FOOTER ──────────────────────────────────────┘
```

### 2.3 — Quy ước khung "Block tin trong template"

Mỗi vị trí trong template chỉ là **1 instance của component Block tin** với property phù hợp:

- Topstory chính → `size=Topstory, thumb=Full/Top, show-lead=true`
- Tin phụ topstory → `size=Standard, thumb=Top, show-lead=false`
- Sidebar → `size=Mini, thumb=Left/none`
- Stream → `size=Stream, thumb=Left, show-lead=true(1 dòng)`

### 2.4 — TEMPLATE 1 · Cụm 7 tin Top (KHÔNG Large 1)

Layout chuyên hiển thị nhiều tin, hợp cho **Landingpage sự kiện / tiêu điểm thời sự**.

```
┌─ HEADER (custom LDP) ─────────────────────────┐
│ [Masthead ad — optional]                       │
│ ┌─ TOPSTORY: 7 tin ───────────────────────────┐│
│ │ ┌──────────────┐  ┌─ tin 2 (nhỏ) ─┐         ││
│ │ │  TIN 1 (to)  │  ├───────────────┤         ││
│ │ │ thumb 770×462│  │ tin 3 (nhỏ)   │         ││
│ │ │   (5:3)      │  └───────────────┘         ││
│ │ │ title + lead │                            ││
│ │ └──────────────┘                            ││
│ │ [tin 4] [tin 5] [tin 6] [tin 7] ← 4 tin ngang││
│ └─────────────────────────────────────────────┘│
│ [Breakpage 970×250 — ngay dưới cụm]            │
└────────────────────────────────────────────────┘
```

**Specs:**

- Cấu trúc: **7 tin** = 1 tin to (số 1) + 2 tin nhỏ bên cạnh + 4 tin dàn ngang bên dưới.
- Thumb tin #1: **770×462 (5:3)**.
- **Quảng cáo: TUYỆT ĐỐI không** đặt **Large 1** trong mảng cụm tin top. Chỉ dùng **Breakpage (970×250)** hiển thị **ngay dưới** cụm.

### 2.5 — TEMPLATE 2 · Cụm 8 tin Top + Large 1

Layout chia cột, chừa **cột phải** cho **Large 1** (trang thư mục loại 2 / chuyên trang).

```
┌─ HEADER ───────────────────────────────────────┐
│ ┌─ TOPSTORY: 8 tin ──────────────┐ ┌─────────┐ │
│ │ ┌────────────┐ ┌ tin 2 ─┐      │ │ LARGE 1 │ │
│ │ │  TIN 1     │ ├────────┤      │ │ 300×600 │ │
│ │ │ 536×322    │ │ tin 3  │      │ │ sticky  │ │
│ │ │  (5:3)     │ └────────┘      │ │  (5s)   │ │
│ │ │ title+lead │                 │ │ chạy dọc│ │
│ │ └────────────┘                 │ │ toàn cụm│ │
│ │ [t4][t5][t6][t7][t8] ← 5 ngang │ └─────────┘ │
│ └────────────────────────────────┘             │
└────────────────────────────────────────────────┘
```

**Specs:**

- Cấu trúc: **8 tin** = 1 tin to (số 1) + 2 tin nhỏ cột giữa + **5 tin ngang** dưới bài to.
- Thumb tin #1: **536×322 (5:3)**.
- **Quảng cáo: CÓ Large 1 (300×600)** cố định cột phải, **sticky 5s**, chạy dọc theo toàn bộ cụm tin top.

### 2.6 — TEMPLATE 3 · Cụm 3 tin Top + Large 1

Layout chia cột, chừa **cột phải** cho **Large 1** (trang thư mục).

```
┌─ HEADER ───────────────────────────────────────┐
│ ┌─ TOPSTORY: 3 tin ──────────────┐ ┌─────────┐ │
│ │ ┌────────────┐ ┌ tin 2 ─┐      │ │ LARGE 1 │ │
│ │ │  TIN 1     │ ├────────┤      │ │ 300×600 │ │
│ │ │ 498×299    │ │ tin 3  │      │ │ sticky  │ │
│ │ │  (5:3)     │ └────────┘      │ │  (5s)   │ │
│ │ │ title+lead │                 │ │ chạy dọc│ │
│ │ └────────────┘                 │ │ toàn cụm│ │
│ └────────────────────────────────┘ └─────────┘ │
└────────────────────────────────────────────────┘
```

**Specs:**

- Cấu trúc: **3 tin** = 1 tin to (số 1) + 2 tin nhỏ cột giữa, sau đó đến list stream tin luôn.
- Thumb tin #1: **498×299**.
- **Quảng cáo: CÓ Large 1 (300×600)** cố định cột phải, **sticky 5s**, chạy dọc theo toàn bộ cụm tin top.

> 🔑 **Khác biệt:** T1 = 7 tin, thumb to 770×462, **không Large 1**. T2 = 8 tin, thumb vừa 536×322, **có Large 1 cột phải**. T3 = 3 tin, thumb 498×299, **có Large 1 cột phải**.

---

# PHẦN 3 — SPECS LẤY TIN CHUẨN (Data Contract)

> Đây là "hợp đồng dữ liệu" giữa CMS ↔ component. Định nghĩa rõ field nào, giới hạn ký tự, tỷ lệ ảnh → để khi đổ tin thật không vỡ layout.

## 3.1 — Field-level spec (mỗi Block tin lấy gì)

| Field                      | Kiểu         | Quy tắc hiển thị                                  | Ghi chú                                                                   |
| -------------------------- | ------------ | ------------------------------------------------- | ------------------------------------------------------------------------- |
| `title`                    | text         | clamp **2 dòng** (Topstory) / **3 dòng** (stream) | Merriweather; tràn → ellipsis "…"                                         |
| `thumbnail`                | image        | tỷ lệ chuẩn (xem 3.2)                             | bắt buộc có ảnh fallback                                                  |
| `lead` (sapo)              | text         | clamp **2–3 dòng**; Topstory mới hiện             | Arial; có thể ẩn                                                          |
| `timestamp`                | datetime     | < 24h → relative ("1h trước"); ≥ 24h → "dd/mm"    |                                                                           |
| `location`                 | text         | hiện đầu lead ("TP HCM - …")                      | optional                                                                  |
| `category`                 | text + color | màu theo folder token                             | link tới folder                                                           |
| `type`                     | enum         | render type-icon                                  | Video/Ảnh/Infographic/Interactive/Live/Review/Trắc nghiệm/Tư vấn/Longform |
| `comment_count`            | number       | icon + số; > 15 mới hiển thị                      | đặt sau Lead hoặc sau Title tùy theo content                              |
| `url`                      | link         | toàn block click được                             |                                                                           |
| `is_live` / `is_sponsored` | bool         | bật Tag tương ứng                                 |                                                                           |

## 3.2 — Tỷ lệ & kích thước ảnh (CHỐT)

**Bộ tỷ lệ chuẩn (CHỐT):**
| Loại ảnh | Tỷ lệ | Dùng cho | Ghi chú |
|---|---|---|---|
| **Thumb chính** | **5:3** | đa số block tin + **Video card + Audio card** | mặc định toàn hệ thống |
| **Thumb vuông** | **1:1** | một số block đặc thù | dùng ít hơn 5:3 |
| **Góc nhìn** | **tròn** (mask 1:1) | mục Góc nhìn / avatar tác giả | rất ít dùng |
| **Short video** | **4:5** | thẻ short video (reel) | ⚠️ **sửa từ 3:5 → 4:5** theo spec mới |
| **Video player (embed)** | **16:9** | trình phát video trong Detail | chỉ player, không phải thumb card |
| Ảnh body (Detail) | theo ảnh gốc | nội dung bài viết | full content width |

> ⚠️ **THAY ĐỔI:** "Video dọc 3:5" trước đây → nay là **Short video 4:5**. Video card trong list dùng thumb **5:3** (không phải 16:9). 16:9 chỉ dành cho **trình phát** trong bài. Đã cập nhật token `ratio`.

**Kích thước @1x / @2x đề xuất (giữ đúng tỷ lệ trên):**
| Vị trí | Tỷ lệ | @1x | @2x (retina) |
|---|---|---|---|
| Topstory T1 (tin #1) | 5:3 | **770 × 462** | 1540 × 924 |
| Topstory T2 (tin #1) | 5:3 | **536 × 322** | 1072 × 644 |
| Topstory T3 (tin #1) | 5:3 | **498 × 299** | 996 × 598 |
| Tin phụ grid (PC) | 5:3 | 270 × 162 | 540 × 324 |
| Stream thumb-left (PC) | 5:3 | 158 × 95 | 316 × 190 |
| Sidebar mini (PC) | 5:3 | 130 × 78 | 260 × 156 |
| Mobile full-width | 5:3 | 374 × 224 | 748 × 448 |
| Mobile thumb-bottom | 5:3 | 374 × 224 | 748 × 448 |
| Thumb vuông | 1:1 | 100 × 100 | 200 × 200 |
| Góc nhìn (tròn) | 1:1 mask | 80 × 80 | 160 × 160 |
| Short video | 4:5 | 240 × 300 | 480 × 600 |
| Video player (embed) | 16:9 | full width | – |

> 🔧 **Quy ước dựng ảnh trong Figma:**
>
> - Mọi ảnh **Fill = Crop** giữ đúng tỷ lệ → component slot `Thumbnail` (🔌 instance swap), property `ratio = 5:3 / 1:1 / circle / 4:5 / 16:9`.
> - **Radius:** Mobile `radius/thumb = 3px`; tròn dùng mask circle.
> - Xuất **@1x + @2x**, **WebP** ưu tiên (fallback JPG). Luôn có **placeholder** cùng tỷ lệ chống vỡ.

## 3.3 — Rule "lấy tin" cho từng module (logic populate slot)

| Module            | Lấy gì                                   | Số tin                        | Rule                                       |
| ----------------- | ---------------------------------------- | ----------------------------- | ------------------------------------------ |
| Topstory Home     | tin nổi bật ban biên tập gắn             | 1 + 7                         | thủ công + auto theo độ hot                |
| Box Folder        | tin mới nhất của folder                  | 5–8                           | sort theo `published_at` desc              |
| Stream            | tin trong folder                         | ~30 tin/trang · 3 trang (≈90) | PC pagination / Mobile infinite — xem 3.3b |
| Tin liên quan     | cùng tag/chủ đề bài đang đọc             | 4                             | loại trừ bài hiện tại                      |
| Xem nhiều nhất    | theo view 24h                            | 5                             | đánh số 1–5                                |
| Theo dòng sự kiện | cùng `event_id`                          | 4–6                           | có "Theo dõi"                              |
| Native Ad         | từ hệ thống quảng cáo (eclick/VnExpress) | theo gói                      | đánh dấu "Tài trợ"                         |

## 3.3b — Quy tắc tải Stream & Pagination (folder) — CHỐT

Cùng 1 rule dữ liệu cho cả 2 nền tảng: **~30 tin/trang · tối đa 3 trang (≈ 90 tin) · sau đó điều hướng bằng "Xem theo ngày".**

- **PC:** dạng **pagination** — ô số trang (active nền `#9F224E` chữ trắng) + chevron prev/next + **"Xem theo ngày"** (icon lịch → date picker xem ngày cũ hơn).
- **Mobile:** dạng **infinite scroll** — tự nạp ~30 tin mỗi lần, tối đa 3 lần; hết 3 lần hiện **"Xem theo ngày"** để đi tiếp.
- Tin stream **loại trừ** tin đã lên Topstory của folder; sort `published_at` desc.

## 3.4 — Quy tắc clamp & overflow (chống vỡ)

- Title: `-webkit-line-clamp` theo size; **không** để title quá dài đẩy layout.
- Lead: ẩn hoàn toàn nếu `size != Topstory`.
- Ảnh thiếu → fallback placeholder (giữ đúng tỷ lệ, không co giãn méo).
- Comment = 0 / location null → **ẩn cả slot** (không để khoảng trống).

---

# PHẦN 4 — QUY ƯỚC FIGMA (để nhân sự dựng đúng chuẩn)

1. **Variables trước, component sau.** Tạo 4 collection: `Color (Light/Dark)`, `Typography`, `Spacing`, `Radius`.
2. **Naming convention:** `Category/ComponentName` → ví dụ `Block tin/News card`, `Atom/Button`, `Organism/Box 300`.
3. **Component Properties:** ưu tiên `Variant` (cho state/size), `Boolean` (cho show/hide slot), `Instance swap` (cho 🔌 thumbnail, icon), `Text` (cho 🔌 title, lead).
4. **Auto Layout 100%** mọi component (để co giãn theo nội dung thật).
5. **1 component – nhiều platform:** thêm property `Platform = PC / Mobile`, không tách file.
6. **Dark theme:** dùng Variable mode `Dark`, không vẽ component riêng.
7. **Đặt tên CTA:** tuân thủ quy tắc đặt tên CTA hiện có (artboard Button) — không dùng cả câu.

---

# ✅ CHECKLIST TỔNG (tick khi dựng xong)

**Tokens**

- [ ] Color (Light + Dark) · [ ] Typography (H1–H7) · [ ] Spacing (5/10/15/20) · [ ] Shadow · [ ] Border/Radius · [ ] Icon set (Outline + Filled + Dạng bài)

**Atoms (A01–A17)**

- [ ] Button · [ ] Hyperlink (Light/Dark) · [ ] Tag · [ ] Type-icon · [ ] Timestamp · [ ] Location · [ ] Comment count · [ ] Divider · [ ] Avatar · [ ] Logo · [ ] Input (5 states) · [ ] Dropdown · [ ] Checkbox/Radio · [ ] Star rating · [ ] Pagination · [ ] Badge · [ ] Skeleton

**Molecules**

- [ ] ⭐ **Block tin** (full variant matrix) · [ ] **Media card (Short/Video/Audio)** · [ ] Author · [ ] Comment item · [ ] Search bar · [ ] Nav item · [ ] Breadcrumb · [ ] Social share · [ ] Quote · [ ] Box title · [ ] Toast · [ ] Notification item · [ ] Voting option

**Organisms**

- [ ] Header (PC/Mobile) · [ ] Footer · [ ] Topstory · [ ] List/Stream · [ ] Box 300 _(ngoài LDP)_ · [ ] Comment section · [ ] Tin liên quan · [ ] Theo dòng sự kiện · [ ] Xem nhiều · [ ] Native Ad (8 loại) · [ ] **Ad slots (Masthead/Large 1/Breakpage/Background)** · [ ] Vote · [ ] Popups (P01–P10)

**Templates**

- [ ] Home · [ ] Folder · [ ] Detail · [ ] Detail Dark · [ ] Landingpage · [ ] **T1 (7 tin)** · [ ] **T2 (8 tin + Large 1)** · [ ] Print · [ ] Mobile set

---

## ✅ ĐÃ CHỐT (cập nhật mới nhất)

- ✅ **Grid PC** = **1100px** (12 col × 66 + 11 gutter × 28); margin 20px ngoài grid (chừa cho Background ad) → mục 0.3.
- ✅ **Grid Mobile** = frame **414px**, **outer margin 20px → content 374px** → mục 0.3.
- ✅ **Tỷ lệ ảnh** — chính **5:3** (gồm Video & Audio card), **1:1**, Góc nhìn **tròn**, **Short video 4:5**, **16:9 chỉ cho player embed** → Phần 3.2.
- ✅ **Token chữ** — đầy đủ Detail (PC 32/M 22) & List (PC 20/M 18), caption, lead → mục 0.2.
- ✅ **Media card** — 3 dạng Short(4:5)/Video(5:3)/Audio(5:3) tách riêng khỏi Block tin → M12–14, Build Spec 5b.
- ✅ **Radius** — Thumb Mobile **3px**, PC 0px.
- ✅ **Blue (info)** = `#076DB6`; **5 Folder colors** đúng nhãn → mục 0.1.
- ✅ **Pagination Stream** = ~30 tin/trang × 3 trang rồi "Xem theo ngày". PC pagination / Mobile infinite, cùng rule.
- ✅ **Ad slots** — Masthead, Large 1 (300×600 sticky 5s), Breakpage, Content Ad, Background → mục 1.3.2.
- ✅ **Template 1** = 7 tin, thumb #1 **770×462**, KHÔNG Large 1 → mục 2.4.
- ✅ **Template 2** = 8 tin, thumb #1 **536×322**, CÓ Large 1 cột phải → mục 2.5.

## ⚠️ CÒN CHỜ CHỐT (chỉ còn 1)

1. **6 Folder colors sai nhãn hex** (Du lịch, Khoa học, Số hóa, Cười, Giải trí, Pháp luật) + **icon Advertisement** — lấy hex thật bằng eyedropper từ swatch file gốc, sửa luôn nhãn. _(Bảng chi tiết ở mục 0.1.)_

> Ghi chú: size px @1x ở Phần 3.2 căn theo tỷ lệ đã chốt — đổi px tùy CMS, **giữ nguyên tỷ lệ**.
