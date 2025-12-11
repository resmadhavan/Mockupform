import React, { useState } from 'react';
import { 
  LayoutDashboard, FileText, Plus, MoreVertical, Pencil, Copy, Trash2,
  ExternalLink, Eye, MessageSquare, Calendar, Search, GripVertical,
  Type, Mail, Phone, Hash, AlignLeft, ChevronDown, CircleDot, CheckSquare,
  Star, Sliders, ToggleLeft, Heading, Minus, Upload, X, Save, Send,
  Settings, Monitor, Smartphone, ArrowLeft, User, LogOut, Menu,
  TrendingUp, Clock, Users, BarChart3, Check, ChevronRight
} from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
const mockForms = [
  { id: 1, title: 'Contact Form', slug: 'contact-form', status: 'published', submissions: 142, updated: '2 hours ago' },
  { id: 2, title: 'Customer Feedback Survey', slug: 'feedback-survey', status: 'published', submissions: 89, updated: '1 day ago' },
  { id: 3, title: 'Event Registration', slug: 'event-registration', status: 'draft', submissions: 0, updated: '3 days ago' },
  { id: 4, title: 'Job Application', slug: 'job-application', status: 'published', submissions: 234, updated: '5 days ago' },
];

const mockFields = [
  { id: 1, type: 'text', label: 'Full Name', name: 'full_name', required: true },
  { id: 2, type: 'email', label: 'Email Address', name: 'email', required: true },
  { id: 3, type: 'phone', label: 'Phone Number', name: 'phone', required: false },
  { id: 4, type: 'select', label: 'How did you hear about us?', name: 'source', options: ['Google', 'Social Media', 'Friend', 'Other'] },
  { id: 5, type: 'textarea', label: 'Your Message', name: 'message', required: true },
  { id: 6, type: 'rating', label: 'Rate your experience', name: 'rating' },
];

const fieldTypes = [
  { type: 'text', label: 'Text Input', icon: Type, category: 'Input' },
  { type: 'email', label: 'Email', icon: Mail, category: 'Input' },
  { type: 'phone', label: 'Phone', icon: Phone, category: 'Input' },
  { type: 'number', label: 'Number', icon: Hash, category: 'Input' },
  { type: 'textarea', label: 'Long Text', icon: AlignLeft, category: 'Input' },
  { type: 'select', label: 'Dropdown', icon: ChevronDown, category: 'Choice' },
  { type: 'radio', label: 'Radio Buttons', icon: CircleDot, category: 'Choice' },
  { type: 'checkbox', label: 'Checkboxes', icon: CheckSquare, category: 'Choice' },
  { type: 'rating', label: 'Rating', icon: Star, category: 'Special' },
  { type: 'slider', label: 'Slider', icon: Sliders, category: 'Special' },
  { type: 'file', label: 'File Upload', icon: Upload, category: 'Special' },
  { type: 'heading', label: 'Heading', icon: Heading, category: 'Layout' },
  { type: 'divider', label: 'Divider', icon: Minus, category: 'Layout' },
];

const Badge = ({ status }) => {
  const styles = {
    published: 'bg-emerald-100 text-emerald-700',
    draft: 'bg-slate-100 text-slate-600',
    archived: 'bg-amber-100 text-amber-700',
  };
  return <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>{status}</span>;
};

const DashboardScreen = ({ onNavigate }) => {
  return (
       <Container className="page-content">
                <div className="box-design mt20">
    <div className="flex h-full bg-stone-100">
      <aside className="w-56 bg-stone-900 text-white p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          <span className="font-semibold">Forms Builder</span>
        </div>
        <nav>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white text-sm">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </a>
        </nav>
        <button className="mt-4 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">
          <Plus className="w-4 h-4" />
          Create Form
        </button>
        <div className="mt-auto flex items-center gap-2 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Mani</p>
            <p className="text-xs text-stone-400 truncate">mani@example.com</p>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">Welcome back, Mani!</h1>
            <p className="text-stone-500 text-sm">Manage your forms and view submissions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white text-sm font-medium shadow-lg shadow-rose-500/25">
            <Plus className="w-4 h-4" />
            New Form
          </button>
        </div>
        
        <div className="flex gap-3 mb-4">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input type="text" placeholder="Search forms..." className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20" />
          </div>
          <select className="px-3 py-2 rounded-lg border border-stone-200 bg-white text-sm">
            <option>All status</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {mockForms.map((form) => (
            <div key={form.id} className="bg-white rounded-xl p-4 shadow-sm border border-stone-200 hover:shadow-md hover:border-stone-300 transition-all cursor-pointer group" onClick={() => onNavigate('builder')}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-stone-900 text-sm group-hover:text-rose-500 transition-colors">{form.title}</h3>
                <MoreVertical className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100" />
              </div>
              <Badge status={form.status} />
              <div className="flex items-center gap-3 mt-3 text-xs text-stone-500">
                <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{form.submissions}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{form.updated}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-stone-200 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium">
                  <Pencil className="w-3 h-3" />Edit
                </button>
                <button onClick={(e) => { e.stopPropagation(); onNavigate('submissions'); }} className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg hover:bg-stone-100 text-stone-600 text-xs font-medium">
                  <Eye className="w-3 h-3" />View
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div></div></Container>
  );
};

const FormBuilderScreen = ({ onNavigate }) => {
  const [selectedField, setSelectedField] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');
  
  const getFieldIcon = (type) => {
    const icons = { text: Type, email: Mail, phone: Phone, select: ChevronDown, textarea: AlignLeft, rating: Star };
    return icons[type] || Type;
  };
  
  return (

  // Contend holder starts
        <div className="page-content-holder">
       

            {/* Main page content block starts */}
            <Container className="page-content pt30">
                <div className="box-design mt20"> 


    <div className="flex flex-col h-full bg-stone-50">
      <header className="bg-white border-b border-stone-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('dashboard')} className="p-1.5 hover:bg-stone-100 rounded-lg">
            <ArrowLeft className="w-4 h-4 text-stone-600" />
          </button>
          <span className="font-semibold text-stone-900 text-sm">Contact Form</span>
          <span className="text-xs text-amber-600">Unsaved</span>
        </div>
        <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg">
          <button onClick={() => setPreviewMode(false)} className={`px-3 py-1 rounded text-xs font-medium ${!previewMode ? 'bg-white shadow-sm' : 'text-stone-500'}`}>Edit</button>
          <button onClick={() => setPreviewMode(true)} className={`px-3 py-1 rounded text-xs font-medium ${previewMode ? 'bg-white shadow-sm' : 'text-stone-500'}`}>Preview</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-stone-100 rounded-lg"><Settings className="w-4 h-4 text-stone-600" /></button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium"><Save className="w-3 h-3" />Save</button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white text-xs font-medium shadow-lg shadow-rose-500/25"><Send className="w-3 h-3" />Publish</button>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {!previewMode ? (
          <>
            <aside className="w-52 bg-white border-r border-stone-200 overflow-y-auto p-3">
              <h2 className="font-semibold text-stone-900 text-sm mb-1">Form Elements</h2>
              <p className="text-xs text-stone-500 mb-4">Drag fields to canvas</p>
              {['Input', 'Choice', 'Special', 'Layout'].map((cat) => (
                <div key={cat} className="mb-4">
                  <h3 className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-2">{cat}</h3>
                  <div className="space-y-1.5">
                    {fieldTypes.filter(f => f.category === cat).map((f) => {
                      const Icon = f.icon;
                      return (
                        <div key={f.type} className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200 cursor-grab text-xs">
                          <div className="w-6 h-6 rounded bg-white flex items-center justify-center border border-stone-200">
                            <Icon className="w-3 h-3 text-stone-600" />
                          </div>
                          <span className="font-medium text-stone-700">{f.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </aside>
            
            <main className="flex-1 overflow-y-auto p-4 bg-stone-100">
              <div className="max-w-lg mx-auto min-h-full bg-white rounded-xl border-2 border-dashed border-stone-300 p-4">
                <div className="space-y-3">
                  {mockFields.map((field) => {
                    const Icon = getFieldIcon(field.type);
                    return (
                      <div key={field.id} onClick={() => setSelectedField(field.id)} className={`bg-white rounded-lg border p-3 cursor-pointer transition-all ${selectedField === field.id ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-stone-200 hover:border-rose-300'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <GripVertical className="w-4 h-4 text-stone-300 cursor-grab" />
                          <div className="w-6 h-6 rounded bg-stone-100 flex items-center justify-center">
                            <Icon className="w-3 h-3 text-stone-600" />
                          </div>
                          <span className="text-[10px] font-medium text-stone-400 uppercase">{field.type}</span>
                        </div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          {field.label}{field.required && <span className="text-red-500 ml-0.5">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea className="w-full px-2 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-xs text-stone-400" rows={2} placeholder="Enter message..." disabled />
                        ) : field.type === 'select' ? (
                          <select className="w-full px-2 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-xs text-stone-400" disabled><option>Select...</option></select>
                        ) : field.type === 'rating' ? (
                          <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-stone-300" />)}</div>
                        ) : (
                          <input className="w-full px-2 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-xs text-stone-400" placeholder={`Enter ${field.label.toLowerCase()}...`} disabled />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
            
            {selectedField && (
              <aside className="w-56 bg-white border-l border-stone-200 overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-stone-200 px-3 py-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-stone-900 text-sm">Edit Field</h3>
                    <p className="text-[10px] text-stone-500">Text Input</p>
                  </div>
                  <button onClick={() => setSelectedField(null)} className="p-1 hover:bg-stone-100 rounded">
                    <X className="w-4 h-4 text-stone-500" />
                  </button>
                </div>
                <div className="p-3 space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Label</label>
                    <input type="text" defaultValue="Full Name" className="w-full px-2 py-1.5 rounded-lg border border-stone-200 text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Field Name</label>
                    <input type="text" defaultValue="full_name" className="w-full px-2 py-1.5 rounded-lg border border-stone-200 text-xs font-mono" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Placeholder</label>
                    <input type="text" defaultValue="Enter your name..." className="w-full px-2 py-1.5 rounded-lg border border-stone-200 text-xs" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-700">Required</span>
                    <div className="w-8 h-4 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 relative">
                      <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-white rounded-full shadow" />
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </>
        ) : (
          <div className="flex-1 flex items-start justify-center p-6 overflow-auto bg-stone-100">
            <div className="absolute top-16 right-6 flex items-center gap-1">
              <button onClick={() => setViewMode('mobile')} className={`p-1.5 rounded-lg ${viewMode === 'mobile' ? 'bg-rose-100 text-rose-600' : 'bg-white text-stone-500'}`}>
                <Smartphone className="w-4 h-4" />
              </button>
              <button onClick={() => setViewMode('desktop')} className={`p-1.5 rounded-lg ${viewMode === 'desktop' ? 'bg-rose-100 text-rose-600' : 'bg-white text-stone-500'}`}>
                <Monitor className="w-4 h-4" />
              </button>
            </div>
            <div className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all ${viewMode === 'mobile' ? 'w-80' : 'w-full max-w-lg'}`}>
              <div className="p-6">
                <h1 className="text-xl font-bold text-stone-900 mb-1">Contact Form</h1>
                <p className="text-stone-600 text-sm mb-6">We'd love to hear from you.</p>
                <div className="space-y-4">
                  {mockFields.map((field) => (
                    <div key={field.id}>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        {field.label}{field.required && <span className="text-red-500 ml-0.5">*</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm" rows={3} placeholder="Enter your message..." />
                      ) : field.type === 'select' ? (
                        <select className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm">
                          <option>Select an option...</option>
                          {field.options?.map(o => <option key={o}>{o}</option>)}
                        </select>
                      ) : field.type === 'rating' ? (
                        <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className={`w-6 h-6 cursor-pointer ${i <= 3 ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`} />)}</div>
                      ) : (
                        <input className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm" placeholder={`Enter ${field.label.toLowerCase()}...`} />
                      )}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium text-sm shadow-lg shadow-rose-500/25">Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div></div></Container>
    </div>
  );
};

const SubmissionsScreen = ({ onNavigate }) => {
  const subs = [
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+1 555-0123', date: '2 hours ago' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@company.com', phone: '+1 555-0456', date: '5 hours ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike.j@email.com', phone: '+1 555-0789', date: '1 day ago' },
    { id: 4, name: 'Emily Brown', email: 'emily.b@domain.org', phone: '+1 555-0321', date: '2 days ago' },
  ];
  
  return (
    <div className="flex h-full bg-stone-100">
      <aside className="w-56 bg-stone-900 text-white p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          <span className="font-semibold">Forms Builder</span>
        </div>
        <nav>
          <button onClick={() => onNavigate('dashboard')} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-stone-300 hover:bg-white/10 text-sm">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('dashboard')} className="p-1.5 hover:bg-stone-200 rounded-lg">
              <ArrowLeft className="w-4 h-4 text-stone-600" />
            </button>
            <div className="mb15">
              <h1 className="text-xl font-bold text-stone-900">Contact Form - Submissions</h1>
              <p className="text-stone-500 text-sm">142 total responses</p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium">
            <Upload className="w-3 h-3" />Export
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { icon: Eye, label: 'Views', value: '1,247', color: 'blue' },
            { icon: Users, label: 'Submissions', value: '142', color: 'emerald' },
            { icon: TrendingUp, label: 'Completion', value: '11.4%', color: 'amber' },
            { icon: Clock, label: 'Avg. Time', value: '45s', color: 'purple' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-3 shadow-sm border border-stone-200 mb20">
              <div className="flex items-center gap-2 mb-1">
                <div className={`p-1.5 bg-${stat.color}-100 rounded-lg`}>
                  <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
                </div>
                <span className="text-xs text-stone-500">{stat.label}</span>
              </div>
              <p className="text-lg font-bold text-stone-900">{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-4 py-2 text-left text-[10px] font-semibold text-stone-500 uppercase">#</th>
                <th className="px-4 py-2 text-left text-[10px] font-semibold text-stone-500 uppercase">Date</th>
                <th className="px-4 py-2 text-left text-[10px] font-semibold text-stone-500 uppercase">Name</th>
                <th className="px-4 py-2 text-left text-[10px] font-semibold text-stone-500 uppercase">Email</th>
                <th className="px-4 py-2 text-left text-[10px] font-semibold text-stone-500 uppercase">Phone</th>
                <th className="px-4 py-2 text-right text-[10px] font-semibold text-stone-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {subs.map((s, i) => (
                <tr key={s.id} className="hover:bg-stone-50">
                  <td className="px-4 py-2 text-xs text-stone-500">{i+1}</td>
                  <td className="px-4 py-2 text-xs text-stone-600">{s.date}</td>
                  <td className="px-4 py-2 text-xs font-medium text-stone-900">{s.name}</td>
                  <td className="px-4 py-2 text-xs text-stone-600">{s.email}</td>
                  <td className="px-4 py-2 text-xs text-stone-600">{s.phone}</td>
                  <td className="px-4 py-2 text-right">
                    <button className="p-1 hover:bg-stone-100 rounded text-stone-500"><Eye className="w-3 h-3" /></button>
                    <button className="p-1 hover:bg-red-50 rounded text-stone-500 hover:text-red-500"><Trash2 className="w-3 h-3" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between px-4 py-2 border-t border-stone-200">
            <p className="text-xs text-stone-500">Showing 1 - 4 of 142</p>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-stone-100 rounded text-stone-500"><ArrowLeft className="w-4 h-4" /></button>
              <span className="text-xs text-stone-700">Page 1</span>
              <button className="p-1 hover:bg-stone-100 rounded text-stone-500"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const PublicFormScreen = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  
  if (submitted) {
    return (
      <div className="h-full bg-stone-100 flex items-center justify-center p-4">
        <div className="text-center max-w-xs">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
            <Check className="w-6 h-6 text-emerald-600" />
          </div>
          <h1 className="text-lg font-bold text-stone-900 mb-1">Thank you!</h1>
          <p className="text-stone-500 text-sm mb-4">Your response has been recorded.</p>
          <button onClick={() => { setSubmitted(false); onNavigate('dashboard'); }} className="text-rose-500 text-sm font-medium">Back to Dashboard</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="h-full bg-stone-100 py-4 px-4 overflow-auto">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-1 text-xs text-stone-400">
          <FileText className="w-3 h-3" />
          <span>Powered by Forms Builder</span>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-5">
          <h1 className="text-xl font-bold text-stone-900 mb-1">Contact Form</h1>
          <p className="text-stone-600 text-sm mb-5">We'd love to hear from you.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm" placeholder="Enter your name..." />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Phone</label>
              <input type="tel" className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm" placeholder="+1 (555) 000-0000" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">How did you hear about us?</label>
              <select className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm">
                <option>Select...</option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Friend</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Message <span className="text-red-500">*</span></label>
              <textarea className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm" rows={3} placeholder="Enter your message..." />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Rate your experience</label>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <button key={i} onClick={() => setRating(i)} className="p-0.5 hover:scale-110 transition-transform">
                    <Star className={`w-6 h-6 ${i <= rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => setSubmitted(true)} className="mt-5 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium text-sm shadow-lg shadow-rose-500/25 hover:shadow-xl transition-all">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default function FormsBuilderMockup() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  
  const screens = { dashboard: DashboardScreen, builder: FormBuilderScreen, submissions: SubmissionsScreen, public: PublicFormScreen };
  const CurrentScreen = screens[currentScreen];
  
  return (
    <Container className="mt80">
    <div className="h-screen flex flex-col bg-stone-100 font-sans">
      <div className="flex-1">
        <CurrentScreen onNavigate={setCurrentScreen} />
      </div>
      <div className="bg-stone-900 text-white px-2 py-2 flex items-center justify-center gap-1">
        {[
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'builder', label: 'Builder' },
          { id: 'submissions', label: 'Submissions' },
          { id: 'public', label: 'Public Form' },
        ].map((s) => (
          <button key={s.id} onClick={() => setCurrentScreen(s.id)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${currentScreen === s.id ? 'bg-gradient-to-r from-rose-500 to-orange-400 text-white' : 'text-stone-400 hover:text-white'}`}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
    </Container>
  );
}
