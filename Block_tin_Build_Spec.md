# VnExpress — BLOCK TIN · Build Spec (Figma-ready)

### Tài liệu dựng chi tiết cho component lõi "Block tin"

> Đi kèm file tổng `VnExpress_Component_Inventory_Spec.md`. File này dành riêng cho nhân sự dựng component trong Figma — đọc từ trên xuống là dựng được.

---

## 0. NGUYÊN TẮC

- **1 component set duy nhất** tên `Block tin`, điều khiển bằng property — **không** vẽ rời từng kiểu.
- Mọi màu/chữ/spacing **tham chiếu Token/Variable**, không hardcode.
- Mọi phần thay đổi được = **slot** (instance swap / text property), đánh dấu 🔌.
- Mọi text dài đều **clamp + ellipsis**, không đẩy layout.

---

## 1. ANATOMY (cấu trúc & thứ tự slot)

```
┌──────────────────────────────────────────┐
│  [Tag/Live]🔌                              │  ← tag (optional)
│  ┌────────────┐                            │
│  │ Thumbnail  │🔌  ← Ảnh, Video, VnEGO,    │
│  │  (ratio)   │     Infographic, Tâm sự,   │
│  └────────────┘     Spotlight = badge góc  │
│                     dưới trái (bottom-left)│
│  [type-icon]🔌 Title 🔌                    │  ← icon đứng trước title khi NO-THUMB
│  [💬 Comment]🔌                            │  ← (Nếu block rỗng Lead) Đặt sau Title, chỉ hiện khi > 15
│  Lead / Sapo 🔌                            │  ← optional theo size
│  [💬 Comment]🔌                            │  ← (Nếu block có đủ Title, Lead, Thumb) Đặt sau Lead, chỉ hiện khi > 15
│  Meta: timestamp🔌 · location🔌 · cat🔌     │
└──────────────────────────────────────────┘
```

**Spacing giữa các slot (dùng token):**
| Cặp | Token | Giá trị |
|---|---|---|
| Thumb → Title | `space/double` | 10px |
| Title → Lead | `space/normal` | 5px |
| Lead → Meta | `space/normal` | 5px |
| (Không lead) Title → Meta | `space/normal` | 5px |
| Block ↔ Block (trong list) | `space/section` | 20px |
| Thumb-left ↔ khối text (gutter ngang) | – | 10–12px |

---

## 2. FIGMA COMPONENT PROPERTIES (schema chuẩn)

### 2.1 — Variant properties (tạo master variants)

| Property   | Values                                                | Ghi chú                                                                     |
| ---------- | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| `Platform` | `PC` · `Mobile`                                       | Mobile bật radius 3px cho thumb                                             |
| `Size`     | `Topstory` · `Standard` · `Stream` · `Mini`           | quyết định text token + layout                                              |
| `Thumb`    | `Top` · `Bottom` · `Left` · `Right` · `Full` · `None` | vị trí ảnh (Bottom = ảnh dưới text, dùng cho list Mobile; None = không ảnh) |
| `State`    | `Default` · `Hover` · `Visited` · `Loading`           | Loading = skeleton                                                          |

### 2.2 — Boolean properties (bật/tắt trong từng variant — KHÔNG nhân master)

`show Lead` · `show Timestamp` · `show Location` · `show Category` · `show Comment` · `show Tag`

### 2.3 — Instance swap (slot)

| Slot           | Trỏ tới component | Property của component đó                                                                |
| -------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| `Thumbnail` 🔌 | `Thumb`           | `ratio = 5:3 (mặc định) / 1:1 / circle / 4:5 (short video) / 16:9 (player embed)`        |
| `Type-icon` 🔌 | `Type-icon`       | `type = Live/Video/Ảnh/Audio/Infographic/Interactive/Review/Trắc nghiệm/Tư vấn/Longform` |

> ⚙️ **Ratio đặt ở component `Thumb`, KHÔNG đặt ở Block tin** → tránh nổ variant. Block tin chỉ swap thumbnail.

### 2.4 — Text properties (nội dung)

`Title` · `Lead` · `Timestamp` · `Location` · `Category` · `Comment count` · `Tag label`

---

## 3. SPEC THEO SIZE — TOKEN CHỮ BLOCK LIST (CHỐT)

**Block list tin — token chữ:**
| | PC | Mobile |
|---|---|---|
| `list/title` | **20px · 160% · Merriweather Bold · `#222`** | **18px · 150% · Merriweather Bold · `#222`** |
| `list/lead` | **16px · 160% · Arial · `#4F4F4F`** | **17px · 160% · Arial · `#4F4F4F`** |

> Title có thể override bằng `font/ldp-title` (font campaign), fallback Merriweather.

**Áp dụng theo size:**
| Size | Title | Lead | Thumb mặc định | Ratio | Dùng ở đâu |
|---|---|---|---|---|---|
| **Topstory** | `list/title` (lớn hơn theo template) | ✓ 2–3 dòng | Top/Full | 5:3 | tin #1 cụm top |
| **Standard** | `list/title` | optional 2 dòng | PC: Top/Left · M: Bottom | 5:3 / 1:1 | grid, tin phụ |
| **Stream** | `list/title` | optional 1 dòng | PC: Left · M: Bottom | 5:3 | list dày |
| **Mini** | `list/title` (rút nhỏ) | ✗ | Left / None | 5:3 / 1:1 | tin liên quan |

**Clamp title:** Topstory 2 dòng · Standard 3 dòng · Stream 2–3 dòng · Mini 2 dòng → ellipsis.

## 3b. TOKEN CHỮ BÀI CHI TIẾT (Detail body) — CHỐT

_(Khác với block list — dùng khi dựng template Detail)_
| Token | PC | Mobile |
|---|---|---|
| `title-detail` | **32px · 150% · Merriweather Bold · `#222`** | **22px · 150% · Merriweather Bold · `#222`** |
| `body` | **18px · 160% · Arial 400 · `#222`** | **18px · 160% · Arial 400 · `#222`** |
| `caption` | **14px · 160% · Arial 400 · `#222`** | **17px · 160% · Arial 400 · `#222`** |

> 📌 Phân biệt rõ: **title-detail** (32 PC / 22 M) ≠ **list-title** (20 PC / 18 M). Caption mobile (17) > PC (14). Đều là token riêng, không gộp.
> 🎨 **Font LDP:** title-detail cũng override được bằng `font/ldp-title`.

---

## 4. MA TRẬN TỔ HỢP HỢP LỆ (chỉ dựng các ô này — bỏ tổ hợp vô nghĩa)

| Size \ Thumb | Top     | Bottom | Left    | Full    | None |
| ------------ | ------- | ------ | ------- | ------- | ---- |
| **Topstory** | ✅ (M)  | –      | –       | ✅ (PC) | ✅   |
| **Standard** | ✅ (PC) | ✅ (M) | ✅ (PC) | –       | ✅   |
| **Stream**   | –       | ✅ (M) | ✅ (PC) | –       | ✅   |
| **Mini**     | –       | ✅ (M) | ✅ (PC) | –       | ✅   |

`(PC)` = dùng trên PC · `(M)` = dùng trên Mobile · `None` = dùng cả 2.
→ Mỗi ô hợp lệ × `State (4)`. Số master ≈ **60–70** (đếm theo 4b, vì mỗi cell đã gắn platform). Lấy **mục 4b làm nguồn chuẩn về bố cục.**

> ✅ **CHỐT:** PC và Mobile **khác bố cục** → **giữ property `Platform`** (dựng riêng 2 nền tảng). Bố cục cụ thể từng size xem **mục 4b**. Để tiết kiệm: dùng chung Token/slot, chỉ khác cách sắp Auto Layout giữa 2 platform.

---

## 4b. BỐ CỤC PC vs MOBILE THEO SIZE — CHỐT

> Mobile **không** dùng thumb bên phải. Quy tắc: **Tin top 1 = ảnh trên; tin 2→hết = title-lead trước, ảnh đỡ bên dưới** (ưu tiên giá trị tiêu đề + sapo).

| Size                     | **PC layout**                               | **Mobile layout (CHỐT)**                                  |
| ------------------------ | ------------------------------------------- | --------------------------------------------------------- |
| **Topstory** (tin top 1) | Thumb `Full/Top` lớn, title + lead bên dưới | **Thumb `Top`** full-width (382px) → Title → Lead → Meta  |
| **Standard** (tin 2→)    | Thumb `Top` (grid) / `Left`                 | **Title → Lead → Meta → Thumb `Bottom`** (full-width 5:3) |
| **Stream**               | Thumb `Left`                                | **Title → Lead → Meta → Thumb `Bottom`**                  |
| **Mini**                 | Thumb `Left` / `None`                       | **Title → Meta → Thumb `Bottom`** / `None`                |

**Thứ tự slot Mobile (tin 2→hết):** `Title` → `Lead` → `Meta` → `Thumbnail (Bottom)`. Divider mảnh ngăn cách giữa các tin.

**Đã chốt 3 điểm:**

1. ✅ Mobile = **title-led, thumb-Bottom** (không phải thumb-Right). Tin #1 = thumb-Top.
2. ✅ **Type scale Mobile** giảm bậc — có **token Mobile riêng** (xem mục 3b).
3. ✅ **Box 300 (sidebar): bỏ qua trong phạm vi Landingpage.**

---

## 5. TYPE-ICON — MAPPING & VỊ TRÍ

| Type          | Icon                 | Vị trí hiển thị                             | Ghi chú                           |
| ------------- | -------------------- | ------------------------------------------- | --------------------------------- |
| `Live`        | chấm đỏ + chữ "Live" | trước Title (màu đỏ `#AE2727`)              | tin trực tiếp                     |
| `Video`       | ▶ icon video         | **badge góc dưới trái thumb (bottom-left)** |                                   |
| `Ảnh`         | 📷 camera            | **badge góc dưới trái thumb (bottom-left)** | có thể kèm số ảnh                 |
| `VnEGO`       | icon VnEGO           | **badge góc dưới trái thumb (bottom-left)** |                                   |
| `Infographic` | icon infographic     | **badge góc dưới trái thumb (bottom-left)** | (khi no-thumb thì để trước Title) |
| `Tâm sự`      | icon tâm sự          | **badge góc dưới trái thumb (bottom-left)** |                                   |
| `Spotlight`   | icon spotlight       | **badge góc dưới trái thumb (bottom-left)** |                                   |
| `Interactive` | icon interactive     | trước Title                                 |                                   |
| `Review`      | icon review          | trước Title                                 |                                   |
| `Trắc nghiệm` | icon quiz            | trước Title                                 |                                   |
| `Tư vấn`      | icon tư vấn          | trước Title                                 |                                   |
| `Audio`       | 🎧 icon audio        | trên thumb / trước Title                    | dùng cho Audio card               |
| `Longform`    | (layout đặc biệt)    | –                                           | thường dark theme, full-bleed     |

---

## 5b. MEDIA CARD (component riêng — KHÔNG dùng Block tin)

Tách riêng vì có thành phần đặc thù: **tên show, thời lượng, overlay play, ratio riêng.**
Dựng **1 component set `Media card`**, property `type = Short / Video / Audio`.

| `type`                  | Thumb ratio | Slot hiển thị                       | Icon       |
| ----------------------- | ----------- | ----------------------------------- | ---------- |
| **Short** (short video) | **4:5**     | Title · tên show · **play overlay** | icon Video |
| **Video**               | **5:3**     | Title · tên show · **thời lượng**   | icon Video |
| **Audio**               | **5:3**     | Title · tên show · **thời lượng**   | icon Audio |

**Anatomy:**

```
┌────────────┐
│ Thumbnail  │🔌  ← Short=4:5, Video/Audio=5:3
│ [play◯]    │     ← overlay play (Short/Video)
│ [⏱ 02:45]  │     ← badge thời lượng (Video/Audio)
│ [icon type]│     ← Video / Audio
└────────────┘
Title 🔌            ← list/title token
Tên show 🔌         ← caption, màu phụ
```

**Property:**

- `type = Short / Video / Audio` (đổi ratio + icon + bật/tắt thời lượng & play overlay)
- `Platform = PC / Mobile`
- `show duration` (Video/Audio = on, Short = off)
- Slot: `Thumbnail` 🔌 · `Title` 🔌 · `Show name` 🔌 · `Duration` 🔌

> 📌 **Short** dùng play overlay không kèm thời lượng; **Video/Audio** kèm thời lượng. **Audio** vẫn hiển thị ảnh thumb 5:3 (không phải waveform).

---

## 6. STATES (chi tiết hành vi)

| State       | Title                                            | Thumb                          | Meta            | Ghi chú            |
| ----------- | ------------------------------------------------ | ------------------------------ | --------------- | ------------------ |
| **Default** | text mặc định `#222`                             | ảnh thật                       | hiện            | –                  |
| **Hover**   | đổi sang **màu folder** tương ứng (hoặc primary) | overlay tối nhẹ / zoom 1.03    | giữ nguyên      | cả block clickable |
| **Visited** | `#757575` (xám)                                  | giữ nguyên                     | giữ nguyên      | đã đọc             |
| **Loading** | skeleton 2–3 dòng                                | block xám `#E5E5E5` đúng ratio | skeleton 1 dòng | shimmer `#F7F7F7`  |

---

## 7. DATA BINDING (slot ← CMS field)

_(Chi tiết quy tắc xem Phần 3 file tổng. Tóm tắt mapping:)_

| Slot          | Field CMS                   | Rule rỗng                                                                                             |
| ------------- | --------------------------- | ----------------------------------------------------------------------------------------------------- |
| Title         | `title`                     | luôn có                                                                                               |
| Thumbnail     | `thumbnail` (theo ratio)    | thiếu → placeholder cùng ratio                                                                        |
| Lead          | `lead`                      | ẩn nếu size ≠ Topstory hoặc rỗng                                                                      |
| Timestamp     | `published_at`              | <24h relative, ≥24h "dd/mm"                                                                           |
| Location      | `location`                  | null → ẩn slot                                                                                        |
| Category      | `category` (+ folder color) | –                                                                                                     |
| Comment count | `comment_count`             | ≤ 15 → ẩn. > 15 hiện sau Lead (nếu có đủ Title, Lead, Thumb) hoặc sau Title (nếu chỉ có Title, Thumb) |
| Type-icon     | `type`                      | quyết định icon + overlay                                                                             |
| Tag           | `is_live` / `is_sponsored`  | false → ẩn                                                                                            |

> ⚠️ Slot rỗng phải **ẩn hẳn** (Auto Layout bỏ qua), không để khoảng trắng.

---

## 8. RESPONSIVE (PC ↔ Mobile) — khác bố cục

> Khác bố cục → dựng riêng theo `Platform`. Bố cục từng size: **mục 4b**. Token chữ: **mục 3, 3b**.

- **PC (grid 1100px, 12 col):** thumb góc vuông (0px); Standard grid (thumb-Top), Stream/Mini thumb-Left; có sidebar (trừ Landingpage).
- **Mobile (414px, outer margin 20px → content 374px):** thumb bo `radius/thumb 3px`; **tin #1 = thumb-Top full-width (374)**, **tin 2→hết = title-led + thumb-Bottom**; chữ `list/title 18/150` & `list/lead 17/160`; **không sidebar**.
- Title/Lead **fill-width**, không cố định px.
- **Template cụm tin top:** xem file tổng mục 2.4 (T1 · 7 tin · thumb 770×462 · không Large 1) & 2.5 (T2 · 8 tin · thumb 536×322 · có Large 1).

---

## 9. NAMING & TỔ CHỨC TRONG FIGMA

- Component set: `Block tin`
- Đặt tên layer slot rõ ràng để handoff dev: `slot/thumbnail`, `slot/type-icon`, `txt/title`, `txt/lead`, `meta/timestamp`…
- Page Figma: `02 · Molecules / Block tin`
- Dùng **Auto Layout 100%**, mọi slot là child của Auto Layout dọc; thumb-Left/Right thì wrap trong Auto Layout ngang.

---

## 10. QA CHECKLIST (tick trước khi bàn giao)

- [ ] Đủ các master ✅ ở mục 4 (hoặc bản rút gọn nếu bỏ `Platform`).
- [ ] 4 state cho mỗi master (Default/Hover/Visited/Loading).
- [ ] 6 boolean show/hide chạy đúng, slot rỗng ẩn hẳn (không hở khoảng trắng).
- [ ] Thumbnail swap được đủ 5 ratio; Mobile bo 3px, PC 0px.
- [ ] Type-icon swap đủ 9 loại; Video overlay đúng giữa thumb; Live màu đỏ.
- [ ] Title/Lead clamp + ellipsis đúng số dòng từng size.
- [ ] Text/màu/spacing đều trỏ Token (không hardcode).
- [ ] Hover đổi đúng màu folder; Visited xám `#757575`.
- [ ] Test đổ tiêu đề dài bất thường + thiếu ảnh → không vỡ layout.

---

## 11. DO / DON'T

- ✅ Dùng 1 component set + property → mọi vị trí chỉ là instance đổi property.
- ✅ Ratio để ở component `Thumb`, không để ở Block tin.
- ✅ Slot rỗng ẩn hẳn bằng Auto Layout.
- ❌ Không tạo component riêng cho từng vị trí (folder/sidebar/related…).
- ❌ Không hardcode màu folder vào Block tin — luôn qua token `color/folder/*`.
- ❌ Không cố định chiều rộng px cho title/lead.
