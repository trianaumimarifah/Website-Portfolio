export const projects = [
  {
    id: "waba-dashboard",
    slug: "waba-dashboard",
    title: "WABA Dashboard",
    description: "End-to-end Power BI dashboard untuk tracking metric performa WABA.",
    tools: ["Power BI", "SQL", "Data Modeling"],
    imageUrl: "/assets/placeholder-waba.jpg",
    problem: "Perusahaan kesulitan melakukan tracking performa WABA karena data tersebar di berbagai source dan belum ada visualisasi terpusat.",
    approach: "Melakukan integrasi data menggunakan SQL, membangun data model star schema, dan merancang interactive dashboard di Power BI.",
    result: "Proses tracking KPI menjadi 50% lebih efisien dan manajemen dapat mengambil keputusan berdasarkan data real-time."
  },
  {
    id: "sso-subsidiary-dashboard",
    slug: "sso-subsidiary-dashboard",
    title: "SSO Subsidiary Dashboard",
    description: "Dashboard untuk memonitor operasional dan finansial subsidiary SSO.",
    tools: ["Power BI", "DAX", "Python"],
    imageUrl: "/assets/placeholder-sso.jpg",
    problem: "Reporting manual memakan waktu lama dan sering terjadi human error dalam kompilasi data laporan.",
    approach: "Otomatisasi data pipeline dengan Python dan menyusun DAX measure kompleks untuk kalkulasi finansial di Power BI.",
    result: "Menghilangkan proses manual reporting mingguan dan meningkatkan akurasi data finansial."
  },
  {
    id: "hc-dashboard",
    slug: "hc-dashboard",
    title: "HC Dashboard",
    description: "Human Capital dashboard untuk analisis demografi dan performa karyawan.",
    tools: ["Power BI", "Excel"],
    imageUrl: "/assets/placeholder-hc.jpg",
    problem: "Tim HR tidak memiliki visibilitas yang baik terhadap demografi karyawan, tingkat retensi, dan performa.",
    approach: "Konsolidasi data Excel dari sistem HR, membersihkan data, dan membuat visualisasi interaktif di Power BI.",
    result: "Memudahkan HR dalam memantau attrition rate dan merencanakan rekrutmen ke depan."
  },
  {
    id: "amazon-sales-insight-2025",
    slug: "amazon-sales-insight-2025",
    title: "Amazon Sales Insight 2025",
    description: "Analisis data penjualan Amazon 2025 untuk strategi ekspansi market.",
    tools: ["Python", "Pandas", "Power BI"],
    imageUrl: "/assets/placeholder-amazon.jpg",
    problem: "Kebutuhan analisis tren penjualan historis untuk forecasting tahun 2025.",
    approach: "Melakukan Exploratory Data Analysis (EDA) menggunakan Pandas Python dan memvisualisasikan insight di Power BI.",
    result: "Mengidentifikasi top 3 produk terlaris dan memberikan rekomendasi inventory stock."
  }
];

export const skills = {
  "Data Modeling": ["Star Schema", "Snowflake Schema", "ETL Process"],
  "DAX": ["Time Intelligence", "Calculate Functions", "Measure Optimization"],
  "Data Visualization": ["Power BI", "Tableau", "Dashboard UX/UI"],
  "Python": ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  "SQL": ["PostgreSQL", "MySQL", "Query Optimization", "CTEs"]
};
