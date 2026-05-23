(function(){
if(window._langLoaded) return;
window._langLoaded = true;

// ═══════════════════════════════════════════════════════════
// GABE INTERNATIONAL HUB — Language System (i18n)
// Languages: Indonesian (id) | English (en)
// ═══════════════════════════════════════════════════════════

var LANG = LANG || {

  // ── GENERAL ──────────────────────────────────────────────
  id: {
    // Navigation
    nav_back:         'Kembali',
    nav_logout:       'Keluar',
    nav_settings:     'Pengaturan',
    nav_users:        'Pengguna',
    nav_materials:    'Material',

    // Auth
    login_welcome:    'Selamat Datang',
    login_subtitle:   'Masuk dengan akun Gabe International Hub Anda',
    login_email:      'Email',
    login_password:   'Password',
    login_btn:        'Masuk →',
    login_forgot:     'Lupa password? Hubungi Admin',
    login_verifying:  'Memverifikasi akun...',
    err_fill_all:     '⚠️ Email dan password harus diisi!',
    err_invalid:      '❌ Email atau password salah!',
    err_inactive:     '🚫 Akun Anda dinonaktifkan. Hubungi Admin.',

    // App Topbar
    app_title:        'Kalkulator Volume Kayu',
    app_sub:          'Jepara ERP Suite',

    // Furniture types
    ft_bed:           'Tempat Tidur',
    ft_lemari:        'Lemari',
    ft_kursi:         'Kursi',
    ft_sofa:          'Sofa',
    ft_meja:          'Meja',

    // Config Panel
    cfg_title:        'Parameter & Konfigurasi',
    cfg_type:         'Tipe & Ukuran',
    cfg_select_type:  'Pilih Tipe Standar',
    cfg_wood:         'Default Jenis Kayu',
    cfg_wood_label:   'Kayu Utama (default semua komponen SW)',
    cfg_params:       'Parameter Log & Waste',
    cfg_rendemen:     'Rendemen Log',
    cfg_waste:        'Waste Factor',
    cfg_std_batang:   'Std batang',
    cfg_mixed:        'Mixed Material per Komponen',
    cfg_override:     'Override per Komponen',
    cfg_pure_sw:      '🪵 Pure Solid Wood',
    cfg_mixed_mat:    '🔀 Mixed Material',
    cfg_none_bom:     '── None (via BOM) ──',
    cfg_no_sw:        'Tidak ada komponen SW.',

    // Metrics
    met_net_vol:      'Volume Bersih',
    met_sw_net:       'Solid Wood Net',
    met_log_needed:   'Vol Log Dibutuhkan',
    met_batang:       'Est. Batang SW',
    met_plywood:      'Plywood',
    met_est_cost:     'Est. Biaya Material',
    met_net_sub:      'Ukuran jadi',
    met_sw_sub:       'Sebelum rendemen',
    met_log_sub:      'Setelah ÷ rendemen',
    met_ply_sub:      '122×244cm',
    met_cost_sub:     'Berdasarkan jenis kayu',

    // Tabs
    tab_cutting:      '✂️ Cutting List',
    tab_volume:       '📊 Volume Detail',
    tab_master:       '📦 Material Master',
    tab_history:      '🕐 History',
    tab_bom:          '🔗 BOM JSON',

    // Cutting List table headers
    tbl_code:         'Kode / Nama Komponen',
    tbl_type:         'Tipe',
    tbl_material:     'Jenis / Material',
    tbl_qty:          'Qty',
    tbl_vol_pcs:      'Vol/pcs m³',
    tbl_vol_total:    'Vol Total m³',
    tbl_vol_log:      'Vol Log m³',
    tbl_total_net:    'Total Volume Bersih (Net):',
    tbl_total_log:    'Total Volume Log Dibutuhkan (SW):',

    // Component Groups — Furniture
    grp_leg:          'Kaki / Leg',
    grp_side_rail:    'Side Rail / Rel Samping',
    grp_headboard:    'Headboard / Papan Kepala',
    grp_footboard:    'Footboard / Papan Kaki',
    grp_slat:         'Slat System / Palang Kasur',
    grp_carcass:      'Carcass / Badan Lemari',
    grp_door:         'Pintu / Door',
    grp_base:         'Base Frame / Rangka Bawah',
    grp_internal:     'Internal / Dalam',
    grp_seat:         'Rangka Dudukan / Seat Frame',
    grp_backrest:     'Sandaran / Backrest',
    grp_footrest:     'Dudukan / Seat',
    grp_armrest:      'Arm Rest / Sandaran Tangan',
    grp_tabletop:     'Table Top / Permukaan Meja',
    grp_apron:        'Apron / Rel Meja',
    grp_stretcher:    'Stretcher / Penguat',
    grp_drawer:       'Laci / Drawer',
    grp_shelf:        'Rak Bawah / Bottom Shelf',

    // Component Names — Bed
    comp_kk01:        'Kaki Headboard',
    comp_kk02:        'Kaki Footboard',
    comp_sr01:        'Side Rail Kanan & Kiri',
    comp_hb01:        'Top Rail Headboard',
    comp_hb02:        'Mid Rail Headboard',
    comp_hb03:        'Bottom Rail Headboard',
    comp_hb04:        'Panel Atas Headboard',
    comp_hb05:        'Panel Bawah Headboard',
    comp_fb01:        'Top Rail Footboard',
    comp_fb02:        'Bottom Rail Footboard',
    comp_fb03:        'Panel Footboard',
    comp_sl00:        'Slat Ledger Strip',
    comp_sl01:        'Wood Slat (Palang Kasur)',

    // Component Names — Lemari
    comp_lm01:        'Panel Samping',
    comp_lm02:        'Panel Atas',
    comp_lm03:        'Panel Bawah',
    comp_lm04:        'Panel Belakang',
    comp_lm05:        'Rak Tengah (Shelf)',
    comp_lm06:        'Daun Pintu',
    comp_lm07:        'Stile Pintu Vertikal',
    comp_lm08:        'Rail Pintu Atas & Bawah',
    comp_lm09:        'Base Rail Depan & Belakang',
    comp_lm10:        'Base Rail Samping',
    comp_lm11:        'Hanging Rail',
    comp_lm12:        'Laci Drawer (opsional)',

    // Component Names — Kursi
    comp_kr01:        'Kaki Depan',
    comp_kr02:        'Kaki Belakang',
    comp_kr03:        'Front Rail',
    comp_kr04:        'Back Rail',
    comp_kr05:        'Side Rail',
    comp_kr06:        'Top Rail Sandaran',
    comp_kr07:        'Slat Sandaran',
    comp_kr08:        'Panel Dudukan (Seat)',
    comp_kr09:        'Corner Block',

    // Component Names — Sofa
    comp_sf01:        'Kaki Sofa',
    comp_sf02:        'Panel Arm (Sandaran Tangan)',
    comp_sf03:        'Top Arm Rest',
    comp_sf04:        'Rail Dudukan Depan & Belakang',
    comp_sf05:        'Rail Dudukan Samping',
    comp_sf06:        'Spring Slat Dudukan',
    comp_sf07:        'Rail Sandaran Atas & Bawah',
    comp_sf08:        'Panel Sandaran',
    comp_sf09:        'Slat Sandaran Vertikal',

    // Component Names — Meja
    comp_mj01:        'Top Panel Solid Glue-up',
    comp_mj04:        'Kaki Meja',
    comp_mj05:        'Apron Depan & Belakang',
    comp_mj06:        'Apron Samping',
    comp_mj07:        'Corner Block',
    comp_mj08:        'H-Stretcher Tengah',
    comp_mj09:        'Stretcher Samping',
    comp_mj10:        'Panel Rak Bawah',
    comp_mj11:        'Lipping Rak',
    comp_mj12:        'Drawer Front',
    comp_mj13:        'Drawer Box Kiri & Kanan',
    comp_mj14:        'Drawer Box Depan & Belakang',
    comp_mj15:        'Drawer Bottom (Alas Laci)',
    comp_mj16:        'Drawer Rail / Slide Block',

    // Wood species
    wood_jati:        'Jati',
    wood_sono:        'Sonokeling',
    wood_sonokembang: 'Sono Kembang',
    wood_mahoni:      'Mahoni',
    wood_mindi:       'Mindi',
    wood_akasia:      'Akasia',
    wood_meranti:     'Meranti',
    wood_kamper:      'Kamper',
    wood_sengon:      'Sengon',
    wood_albasia:     'Albasia',
    wood_pinus:       'Pinus',
    wood_trembesi:    'Trembesi',
    wood_plywood:     'Plywood',

    // Material Master page
    mat_title:        'Material Master',
    mat_subtitle:     'Database jenis kayu & material · Update harga dengan historis otomatis',
    mat_add_btn:      '➕ Tambah Material Baru',
    mat_export:       'EXPORT:',
    mat_import:       'IMPORT:',
    mat_import_btn:   '📂 Upload CSV/Excel',
    mat_search:       'Cari nama material, ID...',
    mat_filter_all:   'Semua',
    mat_filter_sw:    '🪵 Solid Wood',
    mat_filter_pw:    '📐 Plywood',
    mat_filter_nw:    '🔩 Non-Wood',
    mat_filter_act:   '✅ Aktif',
    mat_view_card:    '⊞ Card',
    mat_view_list:    '☰ List',
    mat_total:        'Total Material',
    mat_sw_count:     'Solid Wood',
    mat_pw_count:     'Plywood / Board',
    mat_nw_count:     'Non-Wood',
    mat_updates:      'Update Harga Bulan Ini',
    mat_price:        '💰 Harga Aktif',
    mat_update_price: '✏️ Update',
    mat_update_lbl:   'Update Terakhir',
    mat_status:       'Status',
    mat_active:       '✅ Aktif',
    mat_inactive:     '🚫 Nonaktif',
    mat_rendemen:     'Rendemen Log',
    mat_density:      'Densitas',
    mat_class:        'Kelas',
    mat_unit:         'Satuan',
    mat_ilmiah:       'Nama Ilmiah',

    // Actions
    act_view:         '👁 Lihat',
    act_edit:         '✏️ Edit',
    act_duplicate:    '⧉ Duplikat',
    act_more:         '⋯ Lainnya',
    act_history:      '📈 Historis Harga',
    act_pdf:          '📕 Export PDF',
    act_csv:          '📊 Export CSV',
    act_deactivate:   '🚫 Nonaktifkan',
    act_activate:     '✅ Aktifkan',
    act_delete:       '🗑 Hapus',
    act_save:         '💾 Simpan',
    act_cancel:       'Batal',
    act_close:        'Tutup',
    act_new_calc:     '🔄 Baru',
    act_copy_json:    '📋 Copy JSON',
    act_dl_json:      '⬇️ Download .json',
    act_dl_csv:       '📄 Export CSV',
    act_save_hist:    '💾 Simpan History',

    // Audit
    audit_ref:        'Ref:',
    audit_wood:       'Kayu:',
    audit_rendemen:   'Rdm:',
    audit_waste:      'Waste:',

    // BOM
    bom_save_ok:      '💾 Kalkulasi tersimpan ke History!',

    // Admin
    adm_title:        'Manajemen Pengguna',
    adm_subtitle:     'Kelola akun dan hak akses pengguna sistem',
    adm_add_user:     '➕ Tambah Pengguna',
    adm_name:         'Nama',
    adm_email:        'Email',
    adm_role:         'Role',
    adm_last_login:   'Terakhir Login',
    adm_action:       'Aksi',
    adm_your_acc:     'Akun Anda',

    // Roles
    role_admin:       'Admin',
    role_manager:     'Manager',
    role_operator:    'Operator',
    role_viewer:      'Viewer',

    // Messages
    msg_loading:      '⏳ Memuat data material...',
    msg_saving:       '⏳ Menyimpan...',
    msg_saved:        '✅ Berhasil disimpan!',
    msg_deleted:      '🗑 Berhasil dihapus!',
    msg_error:        '❌ Terjadi kesalahan:',
    msg_confirm_del:  'Hapus material ini secara permanen?',
    msg_confirm_del2: 'Konfirmasi sekali lagi: Hapus?',

    // Price history
    hist_title:       '📈 Historis Harga',
    hist_active:      '🟢 HARGA AKTIF',
    hist_no_hist:     'Belum ada historis perubahan harga.',
    hist_trend:       'Tren Harga',
    hist_by:          'oleh',

    // Bed subtypes
    sub_single:       'Single 90×200',
    sub_double:       'Double 120×200',
    sub_queen:        'Queen 160×200',
    sub_king:         'King 180×200',
    sub_custom:       'Custom ...',

    // Dimensions
    dim_length:       'Panjang Total (cm)',
    dim_width:        'Lebar Total (cm)',
    dim_height:       'Tinggi (cm)',
    dim_hboard:       'Tinggi Headboard',
    dim_fboard:       'Tinggi Footboard',
    dim_depth:        'Kedalaman (cm)',
    dim_doors:        'Jumlah Pintu',
    dim_seats:        'Jumlah Seat',
    dim_legs:         'Jumlah Kaki',
    dim_drawers:      'Jumlah Laci',
    dim_shelf:        'Rak Bawah (0/1)',
    dim_top_t:        'Tebal Top (cm)',

    // Footer
    footer_copy:      'Material Master · Price History · Audit Timestamp · BOM Export',
  },

  // ────────────────────────────────────────────────────────
  en: {
    // Navigation
    nav_back:         'Back',
    nav_logout:       'Logout',
    nav_settings:     'Settings',
    nav_users:        'Users',
    nav_materials:    'Materials',

    // Auth
    login_welcome:    'Welcome',
    login_subtitle:   'Sign in with your Gabe International Hub account',
    login_email:      'Email',
    login_password:   'Password',
    login_btn:        'Sign In →',
    login_forgot:     'Forgot password? Contact Admin',
    login_verifying:  'Verifying account...',
    err_fill_all:     '⚠️ Email and password are required!',
    err_invalid:      '❌ Invalid email or password!',
    err_inactive:     '🚫 Your account is disabled. Contact Admin.',

    // App Topbar
    app_title:        'Wood Volume Calculator',
    app_sub:          'Jepara ERP Suite',

    // Furniture types
    ft_bed:           'Bed',
    ft_lemari:        'Wardrobe',
    ft_kursi:         'Chair',
    ft_sofa:          'Sofa',
    ft_meja:          'Table',

    // Config Panel
    cfg_title:        'Parameters & Configuration',
    cfg_type:         'Type & Size',
    cfg_select_type:  'Select Standard Type',
    cfg_wood:         'Default Wood Type',
    cfg_wood_label:   'Primary Wood (default all SW components)',
    cfg_params:       'Log & Waste Parameters',
    cfg_rendemen:     'Log Yield',
    cfg_waste:        'Waste Factor',
    cfg_std_batang:   'Std timber',
    cfg_mixed:        'Mixed Material per Component',
    cfg_override:     'Override per Component',
    cfg_pure_sw:      '🪵 Pure Solid Wood',
    cfg_mixed_mat:    '🔀 Mixed Material',
    cfg_none_bom:     '── None (via BOM) ──',
    cfg_no_sw:        'No SW components.',

    // Metrics
    met_net_vol:      'Net Volume',
    met_sw_net:       'Solid Wood Net',
    met_log_needed:   'Log Volume Required',
    met_batang:       'Est. Timber Pieces',
    met_plywood:      'Plywood',
    met_est_cost:     'Est. Material Cost',
    met_net_sub:      'Finished size',
    met_sw_sub:       'Before yield',
    met_log_sub:      'After ÷ yield',
    met_ply_sub:      '122×244cm',
    met_cost_sub:     'Based on wood type',

    // Tabs
    tab_cutting:      '✂️ Cutting List',
    tab_volume:       '📊 Volume Detail',
    tab_master:       '📦 Material Master',
    tab_history:      '🕐 History',
    tab_bom:          '🔗 BOM JSON',

    // Cutting List table headers
    tbl_code:         'Code / Component Name',
    tbl_type:         'Type',
    tbl_material:     'Species / Material',
    tbl_qty:          'Qty',
    tbl_vol_pcs:      'Vol/pcs m³',
    tbl_vol_total:    'Vol Total m³',
    tbl_vol_log:      'Vol Log m³',
    tbl_total_net:    'Total Net Volume:',
    tbl_total_log:    'Total Log Volume Required:',

    // Component Groups
    grp_leg:          'Leg / Kaki',
    grp_side_rail:    'Side Rail',
    grp_headboard:    'Headboard',
    grp_footboard:    'Footboard',
    grp_slat:         'Slat System',
    grp_carcass:      'Carcass',
    grp_door:         'Door / Pintu',
    grp_base:         'Base Frame',
    grp_internal:     'Internal',
    grp_seat:         'Seat Frame',
    grp_backrest:     'Backrest',
    grp_footrest:     'Seat',
    grp_armrest:      'Arm Rest',
    grp_tabletop:     'Table Top',
    grp_apron:        'Apron',
    grp_stretcher:    'Stretcher',
    grp_drawer:       'Drawer / Laci',
    grp_shelf:        'Bottom Shelf',

    // Component Names — Bed
    comp_kk01:        'Headboard Post',
    comp_kk02:        'Footboard Post',
    comp_sr01:        'Side Rail Left & Right',
    comp_hb01:        'Headboard Top Rail',
    comp_hb02:        'Headboard Mid Rail',
    comp_hb03:        'Headboard Bottom Rail',
    comp_hb04:        'Headboard Upper Panel',
    comp_hb05:        'Headboard Lower Panel',
    comp_fb01:        'Footboard Top Rail',
    comp_fb02:        'Footboard Bottom Rail',
    comp_fb03:        'Footboard Panel',
    comp_sl00:        'Slat Ledger Strip',
    comp_sl01:        'Wood Slat (Bed Slat)',

    // Component Names — Wardrobe
    comp_lm01:        'Side Panel',
    comp_lm02:        'Top Panel',
    comp_lm03:        'Bottom Panel',
    comp_lm04:        'Back Panel',
    comp_lm05:        'Middle Shelf',
    comp_lm06:        'Door Panel',
    comp_lm07:        'Door Stile (Vertical)',
    comp_lm08:        'Door Rail (Top & Bottom)',
    comp_lm09:        'Base Rail Front & Back',
    comp_lm10:        'Base Rail Side',
    comp_lm11:        'Hanging Rail',
    comp_lm12:        'Drawer (optional)',

    // Component Names — Chair
    comp_kr01:        'Front Leg',
    comp_kr02:        'Back Leg',
    comp_kr03:        'Front Rail',
    comp_kr04:        'Back Rail',
    comp_kr05:        'Side Rail',
    comp_kr06:        'Backrest Top Rail',
    comp_kr07:        'Backrest Slat',
    comp_kr08:        'Seat Board',
    comp_kr09:        'Corner Block',

    // Component Names — Sofa
    comp_sf01:        'Sofa Leg',
    comp_sf02:        'Arm Panel',
    comp_sf03:        'Arm Top Rest',
    comp_sf04:        'Seat Rail Front & Back',
    comp_sf05:        'Seat Rail Side',
    comp_sf06:        'Seat Spring Slat',
    comp_sf07:        'Backrest Rail Top & Bottom',
    comp_sf08:        'Backrest Panel',
    comp_sf09:        'Backrest Vertical Slat',

    // Component Names — Table
    comp_mj01:        'Top Panel (Solid Glue-up)',
    comp_mj04:        'Table Leg',
    comp_mj05:        'Apron Front & Back',
    comp_mj06:        'Apron Side',
    comp_mj07:        'Corner Block',
    comp_mj08:        'H-Stretcher Center',
    comp_mj09:        'Side Stretcher',
    comp_mj10:        'Bottom Shelf Panel',
    comp_mj11:        'Shelf Lipping',
    comp_mj12:        'Drawer Front',
    comp_mj13:        'Drawer Box Left & Right',
    comp_mj14:        'Drawer Box Front & Back',
    comp_mj15:        'Drawer Bottom',
    comp_mj16:        'Drawer Rail / Slide Block',

    // Wood species
    wood_jati:        'Teak',
    wood_sono:        'Indian Rosewood',
    wood_sonokembang: 'Padauk',
    wood_mahoni:      'Mahogany',
    wood_mindi:       'White Cedar',
    wood_akasia:      'Acacia',
    wood_meranti:     'Meranti',
    wood_kamper:      'Camphor',
    wood_sengon:      'Albizia / Sengon',
    wood_albasia:     'Falcata / Albasia',
    wood_pinus:       'Pine',
    wood_trembesi:    'Rain Tree',
    wood_plywood:     'Plywood',

    // Material Master page
    mat_title:        'Material Master',
    mat_subtitle:     'Wood & material database · Auto price history tracking',
    mat_add_btn:      '➕ Add New Material',
    mat_export:       'EXPORT:',
    mat_import:       'IMPORT:',
    mat_import_btn:   '📂 Upload CSV/Excel',
    mat_search:       'Search material name, ID...',
    mat_filter_all:   'All',
    mat_filter_sw:    '🪵 Solid Wood',
    mat_filter_pw:    '📐 Plywood',
    mat_filter_nw:    '🔩 Non-Wood',
    mat_filter_act:   '✅ Active',
    mat_view_card:    '⊞ Card',
    mat_view_list:    '☰ List',
    mat_total:        'Total Materials',
    mat_sw_count:     'Solid Wood',
    mat_pw_count:     'Plywood / Board',
    mat_nw_count:     'Non-Wood',
    mat_updates:      'Price Updates This Month',
    mat_price:        '💰 Active Price',
    mat_update_price: '✏️ Update',
    mat_update_lbl:   'Last Updated',
    mat_status:       'Status',
    mat_active:       '✅ Active',
    mat_inactive:     '🚫 Inactive',
    mat_rendemen:     'Log Yield',
    mat_density:      'Density',
    mat_class:        'Grade',
    mat_unit:         'Unit',
    mat_ilmiah:       'Scientific Name',

    // Actions
    act_view:         '👁 View',
    act_edit:         '✏️ Edit',
    act_duplicate:    '⧉ Duplicate',
    act_more:         '⋯ More',
    act_history:      '📈 Price History',
    act_pdf:          '📕 Export PDF',
    act_csv:          '📊 Export CSV',
    act_deactivate:   '🚫 Deactivate',
    act_activate:     '✅ Activate',
    act_delete:       '🗑 Delete',
    act_save:         '💾 Save',
    act_cancel:       'Cancel',
    act_close:        'Close',
    act_new_calc:     '🔄 New',
    act_copy_json:    '📋 Copy JSON',
    act_dl_json:      '⬇️ Download .json',
    act_dl_csv:       '📄 Export CSV',
    act_save_hist:    '💾 Save to History',

    // Audit
    audit_ref:        'Ref:',
    audit_wood:       'Wood:',
    audit_rendemen:   'Yield:',
    audit_waste:      'Waste:',

    // BOM
    bom_save_ok:      '💾 Calculation saved to History!',

    // Admin
    adm_title:        'User Management',
    adm_subtitle:     'Manage user accounts and access rights',
    adm_add_user:     '➕ Add User',
    adm_name:         'Name',
    adm_email:        'Email',
    adm_role:         'Role',
    adm_last_login:   'Last Login',
    adm_action:       'Action',
    adm_your_acc:     'Your Account',

    // Roles
    role_admin:       'Admin',
    role_manager:     'Manager',
    role_operator:    'Operator',
    role_viewer:      'Viewer',

    // Messages
    msg_loading:      '⏳ Loading material data...',
    msg_saving:       '⏳ Saving...',
    msg_saved:        '✅ Saved successfully!',
    msg_deleted:      '🗑 Successfully deleted!',
    msg_error:        '❌ An error occurred:',
    msg_confirm_del:  'Permanently delete this material?',
    msg_confirm_del2: 'Confirm again: Delete?',

    // Price history
    hist_title:       '📈 Price History',
    hist_active:      '🟢 ACTIVE PRICE',
    hist_no_hist:     'No price change history yet.',
    hist_trend:       'Price Trend',
    hist_by:          'by',

    // Bed subtypes
    sub_single:       'Single 90×200',
    sub_double:       'Double 120×200',
    sub_queen:        'Queen 160×200',
    sub_king:         'King 180×200',
    sub_custom:       'Custom ...',

    // Dimensions
    dim_length:       'Total Length (cm)',
    dim_width:        'Total Width (cm)',
    dim_height:       'Height (cm)',
    dim_hboard:       'Headboard Height',
    dim_fboard:       'Footboard Height',
    dim_depth:        'Depth (cm)',
    dim_doors:        'Number of Doors',
    dim_seats:        'Number of Seats',
    dim_legs:         'Number of Legs',
    dim_drawers:      'Number of Drawers',
    dim_shelf:        'Bottom Shelf (0/1)',
    dim_top_t:        'Top Thickness (cm)',

    // Footer
    footer_copy:      'Material Master · Price History · Audit Timestamp · BOM Export',
  }
};

// ═══════════════════════════════════════════════════════════
// i18n Engine
// ═══════════════════════════════════════════════════════════

var _currentLang = _currentLang || localStorage.getItem('gabe_lang') || 'id';

function t(key) {
  var dict = LANG[_currentLang] || LANG['id'];
  return dict[key] || LANG['id'][key] || key;
}

function setLang(lang) {
  _currentLang = lang;
  localStorage.setItem('gabe_lang', lang);
  applyLang();
  // Trigger re-render if available
  if (typeof render === 'function') render();
  if (typeof loadMaterials === 'function') loadMaterials();
}

function getLang() { return _currentLang; }

function applyLang() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = t(key);
    if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.textContent = val;
    }
  });
  // Update data-i18n-ph (placeholder)
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  // Update toggle button appearance
  var toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = _currentLang === 'id'
      ? '<span style="font-size:14px">🇮🇩</span> ID'
      : '<span style="font-size:14px">🇬🇧</span> EN';
    toggleBtn.title = _currentLang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia';
  }
}

// Build lang toggle button HTML
function buildLangToggle() {
  return '<button id="lang-toggle" onclick="setLang(getLang()===\'id\'?\'en\':\'id\')" style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:6px;cursor:pointer;font-size:11px;font-weight:600;display:flex;align-items:center;gap:4px;">' +
    (_currentLang === 'id' ? '<span style="font-size:14px">🇮🇩</span> ID' : '<span style="font-size:14px">🇬🇧</span> EN') +
    '</button>';
}

// Auto-apply on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  applyLang();
});

})();
