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
import './FormBuilder.css';
// Mock data
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
  { type: 'toggle', label: 'Toggle', icon: ToggleLeft, category: 'Special' },
  { type: 'file', label: 'File Upload', icon: Upload, category: 'Special' },
  { type: 'heading', label: 'Heading', icon: Heading, category: 'Layout' },
  { type: 'divider', label: 'Divider', icon: Minus, category: 'Layout' },
];

// Badge component
const Badge = ({ status }) => {
  const styles = {
    published: 'bg-emerald-100 text-emerald-700',
    draft: 'bg-slate-100 text-slate-600',
    archived: 'bg-amber-100 text-amber-700',
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

// Dashboard Screen
const DashboardScreen = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  
  return (
    <Container className="page-content mt90">
                <div className="box-design mt20">
    <div className="min-h-screen bg-stone-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-900 text-white p-4 flex flex-col">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Forms Builder</span>
        </div>
        
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-white">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </a>
        </nav>
        
        <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
          <Plus className="w-5 h-5" />
          <span className="font-medium">Create Form</span>
        </button>
        
        <div className="mt-auto">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Mani</p>
              <p className="text-xs text-stone-400">mani@example.com</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8 pb-24 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'Georgia, serif' }}>
              Welcome back, Mani!
            </h1>
            <p className="text-stone-500 mt-1">Manage your forms and view submissions</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30 hover:-translate-y-0.5 transition-all">
            <Plus className="w-5 h-5" />
            New Form
          </button>
        </div>
        
        {/* Search */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="Search forms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
            />
          </div>
          <select className="px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20">
            <option>All status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
        
        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockForms.map((form) => (
            <div 
              key={form.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-lg hover:border-stone-300 transition-all cursor-pointer group"
              onClick={() => onNavigate('builder')}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-stone-900 group-hover:text-rose-500 transition-colors">
                  {form.title}
                </h3>
                <button className="p-1.5 hover:bg-stone-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-5 h-5 text-stone-400" />
                </button>
              </div>
              
              <Badge status={form.status} />
              
              <div className="flex items-center gap-4 mt-4 text-sm text-stone-500">
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4" />
                  {form.submissions} responses
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {form.updated}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-stone-200 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium transition-colors">
                  <Pencil className="w-4 h-4" />
                  Edit
                </button>
                <button 
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl hover:bg-stone-100 text-stone-600 text-sm font-medium transition-colors"
                  onClick={(e) => { e.stopPropagation(); onNavigate('submissions'); }}
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div></div></Container>
  );
};

// Form Builder Screen
const FormBuilderScreen = ({ onNavigate }) => {
  const [selectedField, setSelectedField] = useState(null);
  const [fields, setFields] = useState(mockFields);
  const [previewMode, setPreviewMode] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');
  
  const getFieldIcon = (type) => {
    const icons = { text: Type, email: Mail, phone: Phone, select: ChevronDown, textarea: AlignLeft, rating: Star };
    return icons[type] || Type;
  };
  
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-stone-200">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('dashboard')} className="p-2 hover:bg-stone-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-stone-600" />
            </button>
            <div>
              <span className="font-semibold text-stone-900">Contact Form</span>
              <span className="ml-2 text-xs text-amber-600">Unsaved changes</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg">
            <button 
              onClick={() => setPreviewMode(false)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${!previewMode ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500'}`}
            >
              Edit
            </button>
            <button 
              onClick={() => setPreviewMode(true)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${previewMode ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500'}`}
            >
              Preview
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-stone-100 rounded-lg">
              <Settings className="w-5 h-5 text-stone-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors">
              <Save className="w-4 h-4" />
              Save
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium shadow-lg shadow-rose-500/25">
              <Send className="w-4 h-4" />
              Publish
            </button>
          </div>
        </div>
      </header>
      
      <div className="flex h-[calc(100vh-3.5rem)]">
        {!previewMode ? (
          <>
            {/* Field Palette */}
            <aside className="w-72 bg-white border-r border-stone-200 overflow-y-auto p-4">
              <h2 className="font-semibold text-stone-900 mb-1">Form Elements</h2>
              <p className="text-sm text-stone-500 mb-6">Drag fields to the canvas</p>
              
              {['Input', 'Choice', 'Special', 'Layout'].map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">{category}</h3>
                  <div className="space-y-2">
                    {fieldTypes.filter(f => f.category === category).map((field) => {
                      const Icon = field.icon;
                      return (
                        <div 
                          key={field.type}
                          className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 cursor-grab active:cursor-grabbing transition-colors"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center border border-stone-200">
                            <Icon className="w-4 h-4 text-stone-600" />
                          </div>
                          <span className="text-sm font-medium text-stone-700">{field.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </aside>
            
            {/* Builder Canvas */}
            <main className="flex-1 overflow-y-auto p-6 pb-24 bg-stone-100">
              <div className="max-w-3xl mx-auto">
                <div className="min-h-[600px] bg-white rounded-2xl border-2 border-dashed border-stone-300 p-6">
                  <div className="space-y-4">
                    {fields.map((field) => {
                      const Icon = getFieldIcon(field.type);
                      return (
                        <div 
                          key={field.id}
                          onClick={() => setSelectedField(field.id)}
                          className={`bg-white rounded-xl border p-4 cursor-pointer transition-all ${
                            selectedField === field.id 
                              ? 'border-rose-500 ring-2 ring-rose-500/20' 
                              : 'border-stone-200 hover:border-rose-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <GripVertical className="w-5 h-5 text-stone-300 cursor-grab" />
                              <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center">
                                <Icon className="w-4 h-4 text-stone-600" />
                              </div>
                              <span className="text-xs font-medium text-stone-400 uppercase">
                                {field.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
                              <button className="p-1.5 hover:bg-stone-100 rounded-lg">
                                <Copy className="w-4 h-4 text-stone-400" />
                              </button>
                              <button className="p-1.5 hover:bg-red-50 rounded-lg">
                                <Trash2 className="w-4 h-4 text-stone-400 hover:text-red-500" />
                              </button>
                            </div>
                          </div>
                          
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                          
                          {field.type === 'textarea' ? (
                            <textarea 
                              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-400 pointer-events-none" 
                              rows={3}
                              placeholder="Enter your message..."
                            />
                          ) : field.type === 'select' ? (
                            <select className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-400 pointer-events-none">
                              <option>Select an option...</option>
                            </select>
                          ) : field.type === 'rating' ? (
                            <div className="flex gap-1">
                              {[1,2,3,4,5].map(i => (
                                <Star key={i} className="w-7 h-7 text-stone-300" />
                              ))}
                            </div>
                          ) : (
                            <input 
                              type="text" 
                              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-400 pointer-events-none"
                              placeholder={`Enter ${field.label.toLowerCase()}...`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </main>
            
            {/* Field Editor */}
            {selectedField && (
              <aside className="w-80 bg-white border-l border-stone-200 overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-stone-900">Edit Field</h3>
                    <p className="text-xs text-stone-500">Text Input</p>
                  </div>
                  <button onClick={() => setSelectedField(null)} className="p-1.5 hover:bg-stone-100 rounded-lg">
                    <X className="w-5 h-5 text-stone-500" />
                  </button>
                </div>
                
                <div className="p-4 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Label</label>
                    <input type="text" defaultValue="Full Name" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Field Name</label>
                    <input type="text" defaultValue="full_name" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Placeholder</label>
                    <input type="text" defaultValue="Enter your name..." className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Help Text</label>
                    <input type="text" placeholder="Additional instructions" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-stone-700">Required</span>
                    <button className="relative w-11 h-6 rounded-full bg-gradient-to-r from-rose-500 to-orange-400">
                      <span className="absolute top-0.5 left-[22px] w-5 h-5 bg-white rounded-full shadow" />
                    </button>
                  </div>
                  
                  <hr className="border-stone-200" />
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Field Width</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20">
                      <option>Full Width</option>
                      <option>Half Width</option>
                      <option>One Third</option>
                    </select>
                  </div>
                </div>
              </aside>
            )}
          </>
        ) : (
          /* Preview Mode */
          <div className="flex-1 flex items-start justify-center p-8 pb-24 overflow-auto bg-stone-100">
            <div className="absolute top-20 right-8 flex items-center gap-2">
              <button 
                onClick={() => setViewMode('mobile')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'mobile' ? 'bg-rose-100 text-rose-600' : 'bg-white text-stone-500'}`}
              >
                <Smartphone className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('desktop')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'desktop' ? 'bg-rose-100 text-rose-600' : 'bg-white text-stone-500'}`}
              >
                <Monitor className="w-5 h-5" />
              </button>
            </div>
            
            <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all ${viewMode === 'mobile' ? 'w-[375px]' : 'w-full max-w-2xl'}`}>
              <div className="p-8">
                <h1 className="text-3xl font-bold text-stone-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Contact Form
                </h1>
                <p className="text-stone-600 mb-8">We'd love to hear from you. Fill out the form below.</p>
                
                <div className="space-y-6">
                  {fields.map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea 
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500" 
                          rows={4}
                          placeholder="Enter your message..."
                        />
                      ) : field.type === 'select' ? (
                        <select className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500">
                          <option value="">Select an option...</option>
                          {field.options?.map(opt => <option key={opt}>{opt}</option>)}
                        </select>
                      ) : field.type === 'rating' ? (
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => (
                            <button key={i} className="p-1 hover:scale-110 transition-transform">
                              <Star className={`w-8 h-8 ${i <= 3 ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`} />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <input 
                          type={field.type} 
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                          placeholder={`Enter ${field.label.toLowerCase()}...`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium shadow-lg shadow-rose-500/25 hover:shadow-xl transition-all">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Submissions Screen
const SubmissionsScreen = ({ onNavigate }) => {
  const mockSubmissions = [
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+1 555-0123', date: '2 hours ago' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@company.com', phone: '+1 555-0456', date: '5 hours ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike.j@email.com', phone: '+1 555-0789', date: '1 day ago' },
    { id: 4, name: 'Emily Brown', email: 'emily.b@domain.org', phone: '+1 555-0321', date: '2 days ago' },
    { id: 5, name: 'David Lee', email: 'david.lee@work.com', phone: '+1 555-0654', date: '3 days ago' },
  ];
  
  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* Sidebar - Same as Dashboard */}
      <aside className="w-64 bg-stone-900 text-white p-4 flex flex-col">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Forms Builder</span>
        </div>
        
        <nav className="space-y-1">
          <button onClick={() => onNavigate('dashboard')} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-stone-300 hover:bg-white/10 hover:text-white transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8 pb-24 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('dashboard')} className="p-2 hover:bg-stone-200 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-stone-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'Georgia, serif' }}>
                Contact Form - Submissions
              </h1>
              <p className="text-stone-500">142 total responses</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Export
          </button>
        </div>
        
        {/* Analytics Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-stone-500">Views</span>
            </div>
            <p className="text-2xl font-bold text-stone-900">1,247</p>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-stone-500">Submissions</span>
            </div>
            <p className="text-2xl font-bold text-stone-900">142</p>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-amber-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-sm text-stone-500">Completion Rate</span>
            </div>
            <p className="text-2xl font-bold text-stone-900">11.4%</p>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-stone-500">Avg. Time</span>
            </div>
            <p className="text-2xl font-bold text-stone-900">45s</p>
          </div>
        </div>
        
        {/* Submissions Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-stone-500 uppercase">#</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-stone-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-stone-500 uppercase">Full Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-stone-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-stone-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-stone-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {mockSubmissions.map((sub, i) => (
                <tr key={sub.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-stone-500">{i + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-stone-600">
                      <Calendar className="w-4 h-4" />
                      {sub.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-stone-900">{sub.name}</td>
                  <td className="px-6 py-4 text-sm text-stone-600">{sub.email}</td>
                  <td className="px-6 py-4 text-sm text-stone-600">{sub.phone}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 hover:bg-stone-100 rounded-lg text-stone-500 hover:text-stone-700">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg text-stone-500 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200">
            <p className="text-sm text-stone-500">Showing 1 - 5 of 142</p>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-stone-100 rounded-lg text-stone-500">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-stone-700">Page 1 of 29</span>
              <button className="p-2 hover:bg-stone-100 rounded-lg text-stone-500">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Public Form Screen
const PublicFormScreen = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  
  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-stone-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Thank you for your submission!
          </h1>
          <p className="text-stone-500 mb-6">Your response has been recorded.</p>
          <button onClick={() => { setSubmitted(false); onNavigate('dashboard'); }} className="text-rose-500 font-medium hover:text-rose-600">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-stone-100 py-8 px-4 pb-24">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-sm text-stone-400">
          <FileText className="w-4 h-4" />
          <span>Powered by Forms Builder</span>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-stone-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Contact Form
            </h1>
            <p className="text-stone-600 mb-8">We'd love to hear from you. Fill out the form below.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  placeholder="Enter your name..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  How did you hear about us?
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500">
                  <option value="">Select an option...</option>
                  <option>Google</option>
                  <option>Social Media</option>
                  <option>Friend</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500" 
                  rows={4}
                  placeholder="Enter your message..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Rate your experience
                </label>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <button 
                      key={i} 
                      onClick={() => setRating(i)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star className={`w-8 h-8 ${i <= rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setSubmitted(true)}
              className="mt-8 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium shadow-lg shadow-rose-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
        
        <p className="text-center mt-6 text-xs text-stone-400">
          Never submit passwords or sensitive information through forms.
        </p>
      </div>
    </div>
  );
};

// Main App with Navigation
export default function FormsBuilderMockup() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  
  const screens = {
    dashboard: DashboardScreen,
    builder: FormBuilderScreen,
    submissions: SubmissionsScreen,
    public: PublicFormScreen,
  };
  
  const CurrentScreen = screens[currentScreen];
  
  return (
    <Container>
    <div className="font-sans">
      {/* Screen Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-2 py-2 rounded-full shadow-xl flex items-center gap-1">
        {[
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'builder', label: 'Builder' },
          { id: 'submissions', label: 'Submissions' },
          { id: 'public', label: 'Public Form' },
        ].map((screen) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreen(screen.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              currentScreen === screen.id 
                ? 'bg-gradient-to-r from-rose-500 to-orange-400 text-white' 
                : 'text-stone-400 hover:text-white'
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>
      
      <CurrentScreen onNavigate={setCurrentScreen} />
    </div>
    </Container>
  );
}
